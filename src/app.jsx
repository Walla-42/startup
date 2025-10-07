import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Play } from './play/play';
import { Scores } from './scores/scores';
import { About } from './about/about';

export default function App() {
  return(
    <BrowserRouter>
        <header>
            <div id="Title">
                <a href="home.html"><img src="../images/StartupLogo.svg" alt="BioMatch Logo" width="150px" height="50px" id="Logo"/></a>
            </div>
            <nav className="NavigationButtons">
                <button onclick="window.location.href='home.html'" className="button">Home</button>
                <button onclick="window.location.href='index.html'" className="button">Logout</button>
            </nav>
        </header>
        <Routes>
            <Route path='/' element={<Login />} exact/>
            <Route path='/create_account' element={<Create_account />} exact/>
            <Route path='/about' element={<About />} exact/>
            <Route path='/home' element={<Home />} exact/>
            <Route path='/leaderboard' element={<Leaderboard />} exact/>
            <Route path='/name_that_molecule' element={<Name_that_molecule />} exact/>
            <Route path='/genome_trivia' element={<Genome_trivia />} exact/>
            <Route path='*' element={<NotFound/>} exact />
        </Routes>
        <footer>
            <span>Contributor(s): Logan Wallace</span>
            <br />
            <a href="about.html">about</a>
            <a href="https://www.github.com/walla-42/startup" target="_blank">Github</a>
        </footer>
    </BrowserRouter>
    );
}

function NotFound() {
    return <main classNameName='container-fluid bg-secondary text-center'>404: Return to sender. Address unknonw.</main>
}