import React from 'react';
import './name_that_molecule.css'

export function NameThatMolecule() { 
    return (
        <main class="game-layout">
            <div class="game-scorecard">
                <fieldset>
                    <legend>Scorecard</legend>
                    <p id="score">Score: 0</p>
                    <p id="timer">Time Left: 30s</p>
                    <p id="correct-answers">Correct: 0</p>
                    <p id="incorrect-answers">Incorrect: 0</p>
                </fieldset>
            </div>

            <div class="game-question">
                <img id="question-image" class="game-question-image" src="https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/tryptophan/PNG" alt="question-image"/>

                
                <h3 id="question-text" class="game-question-text">What molecule is this?</h3>

                <form class="game-form">
                    <div id="answer-entry">
                        <label for="answer">Answer: <input type="text" id="answer" name="answer" required/><br/></label>
                    </div>
                    <button type="button" class="button">Submit</button>
                </form>
            </div>

        </main>
    )
}