![startup-logo](/public/StartupLogo.svg)

[My Notes](notes.md)

BioMatch is a gamified quiz platform that transforms molecular biology into a fast-paced competition. Players race against the clock to identify amino acids, nucleotides, and sequences, with scores updated to a live leaderboard. It makes learning biology competitive and fun — perfect for students, educators, or biology enthusiasts looking to sharpen their knowledge through real-time challenges.


## 🚀 Specification Deliverable

> [!NOTE]
>  Fill in this sections as the submission artifact for this deliverable. You can refer to this [example](https://github.com/webprogramming260/startup-example/blob/main/README.md) for inspiration.

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] Proper use of Markdown
- [x] A concise and compelling elevator pitch
- [x] Description of key features
- [x] Description of how you will use each technology
- [x] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.

### Elevator pitch

BioMatch is a gamified quiz platform that transforms molecular biology into a fast-paced competition. Players race against the clock to identify amino acids, nucleotides, and sequences, with scores updated to a live leaderboard. It makes learning biology competitive and fun — perfect for students, educators, or biology enthusiasts looking to sharpen their knowledge through real-time challenges.

### Design

![login-user-page](/images/LoginPage.png)
![create-user-page](/images/AccountCreationPage.png)
![home-page](/images/HomePage.png)
![genome-trivia-page](/images/GenomeTriviaPage.png)
![name-that-molecule](/images/NameThatMoleculePage.png)
![live-leaderboard-page](/images/LeaderboardPage.png)


### Key features

- live Game Leaderboards
- Timed minigames
- Secured Login over HTTPS
- Multiple choice and written response questions
- In-game scoring
- Game Results are persistently stored in the database for leaderboard tracking

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - To build the basic page structure. 5 total pages- Login, create account, home, game1 and game2.
- **CSS** - for application styling and design. 
- **React** - used for front end, building reusable UI components, managing user input state, managing routing between pages, and updating the page as user interact with it. 
- **Service** - backend service with endpoints for the following:
    - User registration
    - User Login
    - User Logout
    - Fetch Trivia Question
    - Fetch Molecule Picture from PubChem [PUG-REST API](https://pubchem.ncbi.nlm.nih.gov/docs/pug-rest)
    - Submit Game Score
    - Fetch Leaderboard 
- **DB/Login** - used to store users, and game scores in the database. Credentials are stored in the database hashed and users will be unable to participate in a game if they are not logged in. 
- **WebSocket** - When new high scores are achieved, a message is broadcast to the server. Leaderboard is updated live as scores are recieved on game end. 

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Server deployed and accessible with custom domain name** - [My server link](https://biomatchgames.click).

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **HTML pages** - HTML was added for the following pages: login.html, create_account.html, about.html, genome_trivia.html, home.html, index.html, leaderboard.html, name_that_molecule.html
- [x] **Proper HTML element usage** - I added elements for body, main, footer, header, head, nav, and form
- [x] **Links** - all nav buttons link to their corresponding pages. An external link to github was also added in the footer section next to the about link.
- [x] **Text** - Text for the web page was added in the about.html page as well as other places were welcomes (home.html) are utilized. 
- [x] **3rd party API placeholder** - an API placeholder (with an image call) was put in both the genome_trivia.html and name_that_molecule.html file with a comment denoting the placeholder.
- [x] **Images** - Logo images were input into the web applicaiton and API calls provided the rest of the images.
- [x] **Login placeholder** - A login and create account (index.html, create_account.html) page were implemented with login and create account place holders. 
- [x] **DB data placeholder** - The leaderboard page (leaderboard.html) was implemented and has placeholders for data that will come from the database. 
- [x] **WebSocket placeholder** - A live websocket message board placeholder was implemented on the home screen in home.html.
## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Header, footer, and main content body** - Added header, footer, styles to the main.css + added styling to all main body elements to separate thier contents using flex. 
- [x] **Navigation elements** - Standardized styling across all nav elements and buttons and put these styles in the main.cpp.
- [x] **Responsive to window resizing** - used flex to manage window resizing and @media tags to manage content placement at certain size points to handle correct display of webpage across multiple browser window sizes. 
- [x] **Application elements** - Added style to all application elements including buttons, score boxes, tables ect. 
- [x] **Application text content** - Text displayed on the questions and for the about.html page have been styled to appear neat and uniform with the rest of the page styling. 
- [x] **Application images** - Images, including the biomatch logo have been sized and change with the size of the page. 

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Bundled using Vite** - setup dependancies and scripts so that the server can be run with npm run [script-command]
- [x] **Components** - transfered each page html main to separate react components that can be called into the app.jsx and rendered in the index.html. 
- [x] **Router** - Added router to route users to the correct pages within the website as well as a not found page if an unrecoginized address is given.

## 🚀 React part 2: Reactivity deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **All functionality implemented or mocked out** - all games, scores, timers, and leaderboards are implemented with some sort of functionality. 
    - I implemented the name that molecule game play including the timer, score card, submit, molecule cycling, and score submission upon game completion
    - I implemented login and logout functinality including button display controls depending on the use state
    - I implemented the leaderboard to autoupdate when a new score is available
    - I implemented cycling mock websocket messages
- [x] **Hooks** - Hooks implemented for local storage persistence of mock notifications, registered users, react variables ect.
    - Hooks implemented in app.jsx to track the logged in user from the sessions storage
    - I implemented the load from local storage, websocket message fetching and hooks to start/stop the websocket message simulator
    - I implemented hooks to shuffle molecules and start timer when the game starts + on game completion the score is stored
    - User account information is stored in local storage 
    - current user is stored in session storage upon login
    

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Node.js/Express HTTP service** - I did not complete this part of the deliverable.
- [ ] **Static middleware for frontend** - I did not complete this part of the deliverable.
- [ ] **Calls to third party endpoints** - I did not complete this part of the deliverable.
- [ ] **Backend service endpoints** - I did not complete this part of the deliverable.
- [ ] **Frontend calls service endpoints** - I did not complete this part of the deliverable.
- [ ] **Supports registration, login, logout, and restricted endpoint** - I did not complete this part of the deliverable.


## 🚀 DB deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Stores data in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Stores credentials in MongoDB** - I did not complete this part of the deliverable.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.
