import React from 'react';
import { useNavigate } from 'react-router-dom';
import './login_create_account.css'

export function CreateAccount() { 
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');
    const navigate = useNavigate();

    function createAccount(e) {
        e.preventDefault() // prevent the page from reloading when form is submited
        if (!userExists(username)) {
            // store user data in local storage and nav to login page to log in
            storeUser(username, email, password);
            navigate('/');

        } else {
            // display error and clear fields
            setError("Username already taken");
            setUsername('');
            setEmail('');
            setPassword('');
        }
    }

    function storeUser(username, email, password){
        const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
        registeredUsers.push({ username, email, password});
        localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
    }

    function userExists(username){
        const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
        return registeredUsers.some(u => u.username === username);
    }

    return (
    <main>
        <div className="left-column">
            <div id="Introduction-message">
                <h1>Welcome to BioMatch</h1>
                <p>Your gateway to competitive molecular biology quizzes!</p>
            </div>
        </div>

        <div className="right-column">
            <div id="signup-section">
                <h2>Create Account</h2>
                <p>Already have an account? <a href='/'>Login here</a></p>
            </div>
            <div id="login-section">
                <form onSubmit={ createAccount }>
                    <fieldset>
                        <input type="text" className="login-inputs" value={ username } onChange={(e)=>setUsername(e.target.value)} name="username" placeholder="username" required/><br/>
                        <input type="text" className="login-inputs" value={ email } onChange={(e)=>setEmail(e.target.value)} name="email" placeholder="email" required/><br/>
                        <input type="password" className="login-inputs" value={ password } onChange={(e)=>setPassword(e.target.value)} name="password" placeholder="password" required/><br/>
                        <p style={{color:'red'}}>{ error }</p>
                        <button type="submit" className="login-button button">Create Account</button>
                    </fieldset>
                </form>
            </div>
        </div>
    </main>
    )
    }