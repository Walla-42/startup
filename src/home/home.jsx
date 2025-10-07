import React from 'react';
import { NavLink } from 'react-router-dom';
import './home.css'

export function Home() { 
    return(
    <main className="home-main">
        <div className="user-login-info">
            <p>Logged in as: <span id="player-name">current-user</span></p>
        </div>
        
        <div className="GameButtons">
            <NavLink to='/genome_trivia'><button className="game-button button">Genome Trivia</button></NavLink>
            <NavLink to='/name_that_molecule'><button className="game-button button">Name That Molecule</button></NavLink>
        </div>

        <div className="live-updates">
            <p><span id="websocket-user">Walla42</span> has achieved a new highscore in <span id="websocket-game">Name That Molecule</span>!</p>
        </div>
    </main>
    )
}