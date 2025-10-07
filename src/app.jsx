import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
    return <div className='body bg-dark text-light'>
        <header>
            <div id="Title">
                <a href="home.html"><img src="../images/StartupLogo.svg" alt="BioMatch Logo" width="150px" height="50px" id="Logo"/></a>
            </div>
            <nav className="navigation-buttons">
                <button onclick="window.location.href='index.html'" className="nav-button button">Logout</button>
                <button onclick="window.location.href='leaderboard.html'" className="nav-button button">Leaderboards</button>
                <button onclick="window.open('https://www.github.com/walla-42/startup', '_blank')" className="nav-button button">Github</button>
            </nav>
        </header>

        <main>Classes will be injected here</main>

        <footer>
            <span>Contributor(s): Logan Wallace</span>
            <br />
            <a href="about.html">about</a>
            <a href="https://www.github.com/walla-42/startup" target="_blank">Github</a>
        </footer>
    </div>
}