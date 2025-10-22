import React from 'react';
import './name_that_molecule.css'

export function NameThatMolecule() { 
    const [timeLimit, setTimeLimit] = React.useState(30);
    const [timeRemaining, setTimeRemaining] = React.useState(timeLimit)

    const[scoreCard, setScoreCard] = React.useState({
        score: 0,
        correct: 0,
        incorrect: 0
    });

    const [currentMolecule, setCurrentMolecule] = React.useState('');
    const [gameState, setGameState] = React.useState('active');
    const [userInput, setUserInput] = React.useState('');
    const [currentMoleculeIndex, setIndex] = React.useState(0);
    const [gameMolecules, setMolecules] = React.useState([]);
    const [incorrectError, setError] = React.useState('');


    const moleculeList = [
        // Amino Acids (20 total)
        'Alanine','Arginine','Asparagine','Aspartate','Cysteine','Glutamate','Glutamine','Glycine','Histidine',
        'Isoleucine','Leucine','Lysine','Methionine','Phenylalanine','Proline','Serine','Threonine','Tryptophan',
        'Tyrosine','Valine','Adenine','Guanine','Cytosine','Thymine','Uracil', 'Glucose', 'Fructose','Galactose',
        'Ribose','Deoxyribose','Sucrose','Lactose','Maltose','Cholesterol','Palmitate','Oleate','Stearate','Linoleate',
        'Retinol','Thiamine','Riboflavin','Niacin','Pyridoxine','Biotin','Ascorbate','Dopamine','Serotonin','Acetylcholine',
        'FAD','ATP','AMP','Pyrophosphate'
    ]; 

    React.useEffect(() => {
        const shuffled = sortMoleculeList(moleculeList);
        setMolecules(shuffled);
        setCurrentMolecule(shuffled[0]); 
    }, []); 

    React.useEffect(() => {
        if (gameState !== 'active') return; 

        const intervalId = setInterval(() => {
            setTimeRemaining(prev => {
                if (prev <= 1) {
                    setGameState('complete');
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(intervalId);
    }, [gameState]);

    function sortMoleculeList (moleculeList) {
        const shuffled = [...array]; 
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;

    }

    function handleUserInput(e) {
        e.preventDefault();
        
        if (gameState !== 'active') return;  

        if (userInput.toLowerCase().trim() === currentMolecule.toLowerCase()) {
            setScoreCard(prev => ({
                score: prev.score + 100,
                correct: prev.correct + 1,
                incorrect: prev.incorrect
            }));
        } else {
            setError({currentMolecule})
            setScoreCard(prev => ({
                ...prev,
                incorrect: prev.incorrect + 1
            }));
        }

        const nextIndex = currentMoleculeIndex + 1;
        
        if (nextIndex >= gameMolecules.length) {
            const reshuffled = shuffleArray(moleculeList);
            setMolecules(reshuffled);
            setIndex(0);
            setCurrentMolecule(reshuffled[0]);
        } else {
            setIndex(nextIndex);
            setCurrentMolecule(gameMolecules[nextIndex]);
        }

        setUserInput('');
        setError('');
    }

    function buildURLCall(moleculeName) {
        return `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${moleculeName}/PNG`;
    }

    return (
        <main class="game-layout">
            <div class="game-scorecard">
                <fieldset>
                    <legend>Scorecard</legend>
                    <p id="score">Score: {scoreCard.score}</p>
                    <p id="timer">Time Left: {timeRemaining} </p>
                    <p id="correct-answers">Correct: {scoreCard.correct}</p>
                    <p id="incorrect-answers">Incorrect: {scoreCard.incorrect}</p>
                </fieldset>
            </div>

            <div class="game-question">
                <img id="question-image" class="game-question-image" src={buildURLCall(currentMolecule)} alt="question-image"/>

                
                <h3 id="question-text" class="game-question-text">What molecule is this?</h3>

                <form class="game-form" onSubmit={handleUserInput}>
                    <div id="answer-entry">
                        <label for="answer">Answer: <input type="text" id="answer" name="answer" value ={userInput} 
                        onChange={(e) => setUserInput(e.target.value)} disabled={gameState === 'complete'} required/><br/></label>
                    </div>
                    <p id="IncorrectAnswer">{incorrectError}</p>
                    <button type="button" class="button" disabled={gameState === 'complete'}>Submit</button>
                </form>
            </div>

        </main>
    )
}