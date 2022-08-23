import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";


function Login({ setUser }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    async function handleSubmit (e) {
        e.preventDefault();
        await fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => setUser(user));
                navigate('/')
            } else {
                r.json().then((errorData) => setErrors(errorData.errors))
                
            }
        })
       navigate('/home')
    }

    return (
        <>
            <div className='login-container' >
                <div className="text-container">
                <h1>Welcome</h1>
                <form onSubmit={handleSubmit} className='login' >
                    <label htmlFor="username"></label>
                    <input
                    placeholder="username"
                    type="text"
                    id="username"
                    autoComplete="off"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    /><br></br>
                    <label htmlFor="password"></label>
                    <input
                    placeholder="password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    /><br></br>
                    <button type="submit"><span className='sign-in-text'>Sign In</span></button>
                    <div style={{color: "red"}}>{errors.map((error) => error)}</div>
                </form>
                <footer>
                    <span>Don't have an account?  </span>
                    <span><Link to="/signup">Create Account</Link></span>
                </footer>
                </div>
            </div>
        </>
    );
}

export default Login;
