import React from 'react';
import './leaderboard.css'

export function Leaderboard() { 
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
                    <tbody>
                        <tr className="leaderboard-row">
                            <td>1</td>
                            <td>Genome Trivia</td>
                            <td>walla42</td>
                            <td>10600</td>
                        </tr>
                        <tr className="leaderboard-row">
                            <td>2</td>
                            <td>Name that Molecule</td>
                            <td>jellybelly</td>
                            <td>12000</td>
                        </tr>
                        <tr className="leaderboard-row">
                            <td>3</td>
                            <td>Name that Molecule</td>
                            <td>Jaron</td>
                            <td>8000</td>
                        </tr>
                        <tr className="leaderboard-row">
                            <td>4</td>
                            <td>Genome Trivia</td>
                            <td>walla43</td>
                            <td>5000</td>
                        </tr>
                        <tr className="leaderboard-row">
                            <td>5</td>
                            <td>Genome Trivia</td>
                            <td>Jaimie</td>
                            <td>1600</td>
                        </tr>
                        <tr className="leaderboard-row">
                            <td>6</td>
                            <td>Genome Trivia</td>
                            <td>Jecelle</td>
                            <td>600</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    )
}