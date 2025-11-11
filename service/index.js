const express = require('express');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');
const DB = require('./database.js');

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));

const port = process.argv.length > 2 ? process.argv[2] : 4000;

const authCookieName = 'token';

const apiRouter = express.Router();
app.use('/api', apiRouter);

// Create a new user
apiRouter.post('/auth/create', async (req, res) => {
  if (await findUser('username', req.body.username)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    await createUser(req.body.username, req.body.email, req.body.password);
    res.status(200).send({ msg: 'User Created' });
  }
});

// Login existing user
apiRouter.post('/auth/login', async (req, res) => {
  const user = await findUser('username', req.body.username);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      user.token = uuid.v4();
      await DB.updateUser(user)
      setAuthCookie(res, user.token);
      res.status(200).send({ username: user.username });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// Logout user
apiRouter.delete('/auth/logout', async (req, res) => { 
  const user = await findUser('token', req.cookies[authCookieName]);
  if (user) {
    delete user.token;
    DB.updateUser(user);
  }
  res.clearCookie(authCookieName);
  res.status(204).end();
});

// Verify authentication middleware
const verifyAuth = async (req, res, next) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
};

// Get game scores
apiRouter.get('/scores', verifyAuth, async (_req, res) => {
  console.log(`fetching high scores`)
  const scores = await DB.getHighScores();
  res.send(scores);
});

// Submit a new game score
apiRouter.post('/score', verifyAuth, async (req, res) => {
  console.log(`submitting a score`)
  const scores = updateScores(req.body);
  res.send(scores);
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send({ type: err.name, message: err.message });
});

// Fallback route
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

// Helper functions
async function updateScores(newScore) {
  await DB.addScore(newScore);
  return DB.getHighScores();
}

async function createUser(username, email, password) {
  const passwordHash = await bcrypt.hash(password, 10);
  const user = {
    username,
    email,
    password: passwordHash,
  };
  await DB.addUser(user);
}

async function findUser(field, value) {
  if (!value) return null;
  if (field === 'token') {
    return DB.getUserByToken(value);
  }
  return DB.getUserByUsername(value);
}

function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: false, 
    httpOnly: true,
    sameSite: 'strict',
  });
}

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
