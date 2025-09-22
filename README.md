![startup-logo](images/StartupLogo.svg)

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

![login-user-page](assets/images/LoginPage.png)
![create-user-page](assets/images/AccountCreationPage.png)
![home-page](assets/images/HomePage.png)
![genome-trivia-page](assets/images/GenomeTriviaPage.png)
![name-that-molecule](assets/images/NameThatMoleculePage.png)
![live-leaderboard-page](assets/images/LeaderboardPage.png)



<!-- ```mermaid
sequenceDiagram
    actor You
    actor Website
    You->>Website: Replace this with your design
``` -->

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

- [ ] **HTML pages** - I did not complete this part of the deliverable.
- [ ] **Proper HTML element usage** - I did not complete this part of the deliverable.
- [ ] **Links** - I did not complete this part of the deliverable.
- [ ] **Text** - I did not complete this part of the deliverable.
- [ ] **3rd party API placeholder** - I did not complete this part of the deliverable.
- [ ] **Images** - I did not complete this part of the deliverable.
- [ ] **Login placeholder** - I did not complete this part of the deliverable.
- [ ] **DB data placeholder** - I did not complete this part of the deliverable.
- [ ] **WebSocket placeholder** - I did not complete this part of the deliverable.

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Header, footer, and main content body** - I did not complete this part of the deliverable.
- [ ] **Navigation elements** - I did not complete this part of the deliverable.
- [ ] **Responsive to window resizing** - I did not complete this part of the deliverable.
- [ ] **Application elements** - I did not complete this part of the deliverable.
- [ ] **Application text content** - I did not complete this part of the deliverable.
- [ ] **Application images** - I did not complete this part of the deliverable.

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Bundled using Vite** - I did not complete this part of the deliverable.
- [ ] **Components** - I did not complete this part of the deliverable.
- [ ] **Router** - I did not complete this part of the deliverable.

## 🚀 React part 2: Reactivity deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **All functionality implemented or mocked out** - I did not complete this part of the deliverable.
- [ ] **Hooks** - I did not complete this part of the deliverable.

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
