import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { About } from './about/about';
import { CreateAccount } from './create_account/create_account';
import { Login } from './login/login';
import { Leaderboard } from './leaderboard/leaderboard';
import { Home } from './home/home';
import { GenomeTrivia } from './genome_trivia/genome_trivia';
import { NameThatMolecule } from './name_that_molecule/name_that_molecule';


export default function App() {
    const [user, userLoggedIn] = React.useState(localStorage.getItem('currentUser') || null)
    return (
        <BrowserRouter>
            <div className='body bg-dark text-light'>
                <header>
                    <div id="Title">
                        <NavLink to="home"><img src="/StartupLogo.svg" alt="BioMatch Logo" width="150px" height="50px" id="Logo"/></NavLink>
                    </div>
                    <nav className="navigation-buttons">
                        {user && <NavLink to="home"><button className="nav-button button">Home</button></NavLink>}
                        {user && <NavLink to ='/'><button  className="nav-button button">Logout</button></NavLink>}
                        {user && <NavLink to ='leaderboard'><button className="nav-button button">Leaderboards</button></NavLink>}
                        <NavLink to="https://www.github.com/walla-42/startup" target="_blank"><button className="nav-button button">Github</button></NavLink>
                    </nav>
                </header>

                <Routes>
                    <Route path='/' element={<Login userLoggedIn={userLoggedIn}  />} exact />
                    <Route path='/about' element={<About />} exact />
                    <Route path='/create_account' element={<CreateAccount />} exact />
                    <Route path='/home' element={<Home />} exact />
                    <Route path='/leaderboard' element={<Leaderboard />} exact />
                    <Route path='/genome_trivia' element={<GenomeTrivia />} exact />
                    <Route path='/name_that_molecule' element={<NameThatMolecule />} exact />
                    <Route path='*' element={<NotFound />} exact />
                </Routes>

                <footer>
                    <span>Contributor(s): Logan Wallace</span>
                    <br />
                    <NavLink to="about">about</NavLink>
                </footer>
            </div>
        </BrowserRouter>
    )
}

function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>
}

