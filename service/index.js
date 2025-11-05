const express = require('express');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));

const port = process.argv.length > 2 ? process.argv[2] : 4000;

let users = [];
let scores = [];

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
      setAuthCookie(res, user.token);
      res.status(200).send({ username: user.username });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// Logout user
apiRouter.post('/auth/logout', async (req, res) => { 
  const user = await findUser('token', req.cookies[authCookieName]);
  if (user) {
    user.token = null;
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
apiRouter.get('/scores', verifyAuth, (_req, res) => {
  res.send(scores);
});

// Submit a new game score
apiRouter.post('/score', verifyAuth, (req, res) => {
  scores = updateScores(req.body);
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
function updateScores(newScore) {
  let found = false;
  for (const [i, prevScore] of scores.entries()) {
    if (newScore.score > prevScore.score) {
      scores.splice(i, 0, newScore);
      found = true;
      break;
    }
  }
  if (!found) {
    scores.push(newScore);
  }
  if (scores.length > 10) {
    scores.length = 10;
  }
  return scores;
}

async function createUser(username, email, password) {
  const passwordHash = await bcrypt.hash(password, 10);
  const user = {
    username,
    email,
    password: passwordHash,
    token: null
  };
  users.push(user);
}

async function findUser(field, value) {
  if (!value) return null;
  return users.find((u) => u[field] === value);
}

function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true, 
    httpOnly: true,
    sameSite: 'strict',
  });
}

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
