import React from 'react';
import { NavLink } from 'react-router-dom';
import { GameEvent, GameNotifier } from './gameNotifier';
import './home.css'

export function Home() { 
    const [user, setUser] = React.useState(sessionStorage.getItem('currentUser') || null)

    const [events, setEvent] = React.useState([]);

    // Load notifications from localStorage on mount
    React.useEffect(() => {
        const savedEvents = localStorage.getItem('gameNotifications');
        if (savedEvents) {
            setEvent(JSON.parse(savedEvents));
        }
    }, []);

    // Save notifications to localStorage whenever they change
    React.useEffect(() => {
        if (events.length > 0) {
            localStorage.setItem('gameNotifications', JSON.stringify(events));
        }
    }, [events]);

    React.useEffect(() => {
        GameNotifier.addHandler(handleGameEvent);
        // Start simulator when home component mounts
        GameNotifier.startSimulator();

        return () => {
            GameNotifier.removeHandler(handleGameEvent);
            // Stop simulator when home component unmounts
            GameNotifier.stopSimulator();
        };
    }, []);

    function handleGameEvent(event) {
        setEvent((prevEvents) => {
        let newEvents = [event, ...prevEvents];
        if (newEvents.length > 9) {
            newEvents = newEvents.slice(0, 9);
        }
        return newEvents;
        });
    }

    function createMessageArray() {
        const messageArray = [];
        for (const [i, event] of events.entries()) {
        let message = 'unknown';
        if (event.type === GameEvent.End) {
            message = (
                <React.Fragment>
                    scored <span className="score-value">{event.value.score}</span> in <span className="game-name">{event.value.game}</span>
                </React.Fragment>
            );
        } else if (event.type === GameEvent.Start) {
            message = (
                <React.Fragment>
                    started a new game in <span className="game-name">{event.value.game}</span>
                </React.Fragment>
            );
        } else if (event.type === GameEvent.System) {
            message = event.value.msg;
        }

        messageArray.push(
            <div key={i} className='event'>
            <span className={'player-event'}>{event.from.split('@')[0]}</span>
            {message}
            </div>
        );
        }
        return messageArray;
    }
    return(
    <main className="home-main">
        <div className="user-login-info">
            <p>Logged in as: <span id="player-name">{ user }</span></p>
        </div>
        
        <div className="GameButtons">
            {/* <NavLink to='/genome_trivia'><button className="game-button button">Genome Trivia</button></NavLink> */}
            <NavLink to='/name_that_molecule'><button className="game-button button">Name That Molecule</button></NavLink>
        </div>

        <div className="live-updates">
            {createMessageArray()}
        </div>
    </main>
    )
}