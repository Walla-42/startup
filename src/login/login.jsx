import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './login_create_account.css'

export function Login({ userLoggedIn }) { 
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');
    const navigate = useNavigate();

    async function loginUser(e) {
        // prevents page from reloading
        e.preventDefault();

        const response = await fetch('/api/auth/login', {
                method: 'POST',
                body: JSON.stringify({ username: username, password: password }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });

        if (response?.status === 200) {
            console.log('logging in ' + response.username);
            sessionStorage.setItem('currentUser', response.username);
            userLoggedIn(response.username);
            navigate("/home");
        } else {
            setError("Invalid username or password");
            setPassword('');
            setUsername('');
        }
    }

    function validLoginInfo({ username, password }) {
        const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
        const foundUser = registeredUsers.find(u => u.username === username && u.password === password);
        return !!foundUser
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
                    <h2>Login</h2>
                    <p>Don't have an account? <a href='create_account'>Create your account</a></p>
                </div>
                <div id="login-section">
                    <form onSubmit={ loginUser }>
                        <fieldset>
                            <input type="text" className="login-inputs" value = { username } onChange={(e)=>setUsername(e.target.value)} name="username" placeholder="username" required/><br/>
                            <input type="password" className="login-inputs" value = { password } onChange={(e)=>setPassword(e.target.value)} name="password" placeholder="password" required/><br/>
                            <p id="login_error" style={{color: 'red'}}>{ error }</p>
                            <button type="submit" className="login-button button">Login</button>
                        </fieldset>
                    </form>
                </div>
                
            </div>
        </main>
    )
}