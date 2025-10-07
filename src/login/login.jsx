import React from 'react';
import './login_create_account.css'

export function Login() { 
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
                    <form method="get" action="home">
                        <fieldset>
                            <input type="text" className="login-inputs" name="username" placeholder="username" required/><br/>
                            <input type="password" className="login-inputs" name="password" placeholder="password" required/><br/>
                            <button type="submit" className="login-button button">Login</button>
                        </fieldset>
                    </form>
                </div>
                
            </div>
        </main>
    )
}