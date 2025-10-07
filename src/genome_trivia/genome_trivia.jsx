import React from 'react';
import './genome_trivia.css'

export function GenomeTrivia() { 
    return (
        <main classsName="game-layout">
            <div classsName="game-scorecard">
                <fieldset>
                    <legend>Scorecard</legend>
                    <p id="score">Score: 0</p>
                    <p id="question-number">Question: 1/10</p>
                    <p id="timer">Time Left: 30s</p>
                    <p id="correct-answers">Correct: 0</p>
                    <p id="incorrect-answers">Incorrect: 0</p>
                </fieldset>
            </div>

            <div classsName="game-question">
                <img id="question-image" classsName="game-question-image" src="https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/tryptophan/PNG" alt="question-image"/>

                <h3 id="question-text" classsName="game-question-text">how many carbons are present in Tryptophan?</h3>

                <form id="quiz-form" classsName="game-form">
                    <div classsName="answer-options">
                        <label for="optionA"><input type="radio" id="optionA" name="varRadio" value="A"/><span>A. </span>23</label>
                
                        <label for="optionB"><input type="radio" id="optionB" name="varRadio" value="B" /><span>B. </span>8</label><br/>
                    
                        <label for="optionC"><input type="radio" id="optionC" name="varRadio" value="C" /><span>C. </span>11</label>
                        
                        <label for="optionD"><input type="radio" id="optionD" name="varRadio" value="D" /><span>D. </span>12</label><br/>
                    </div>
                    <button type="button" classsName="button">Submit</button>
                </form>
            </div>
        </main>
    )
}