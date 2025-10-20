import React from 'react';
import './leaderboard.css'

export function Leaderboard() { 
    const [scores, setScores] = React.useState([]);

    // Demonstrates calling a service asynchronously so that
    // React can properly update state objects with the results.
    React.useEffect(() => {
        const scoresText = localStorage.getItem('scores');
        if (scoresText) {
            setScores(JSON.parse(scoresText));
        }
    }, []);

    // Demonstrates rendering an array with React
    const scoreRows = [];

    if (scores.length) {
        for (const [i, score] of scores.entries()) {
            scoreRows.push(
                <tr key={i}>
                    <td>{i}</td>
                    <td>{score.gameName}</td>
                    <td>{score.player}</td>
                    <td>{score.score}</td>
                </tr>
            );
        }
    } else {
        scoreRows.push(
            <tr key="empty">
                <td colSpan={4} style={{ textAlign: 'center', padding: '1rem', background: 'black', font_weight:'bold', font_size:'20px' }}>BE THE FIRST TO SCORE</td>
            </tr>
        );
    }

    return (
         <main>
            <div className="leaderboard">
                <h1>Leaderboards</h1>
                <table>
                    <thead>
                        <tr className="leaderboard-header">
                            <th>#</th>
                            <th>Game</th>
                            <th>Username</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody id='scores'>{scoreRows}</tbody>
                </table>
            </div>
        </main>
    );
}