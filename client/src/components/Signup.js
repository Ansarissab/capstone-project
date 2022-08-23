import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Signup({ onLogin, setUser}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        
        fetch("/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username,
            password,
            password_confirmation: passwordConfirmation,
        }),
    }).then((r) => {
        if (r.ok) {
            r.json().then((user) => setUser(user));
            navigate('/')
        } else {
            r.json().then((errorData) => setErrors(errorData.errors))
            alert(errors)
        }
        })
    }

    return (
        <>
         <div className='background-div'>
            <div>
            <h1>Create Account</h1>
             <form onSubmit={handleSubmit} className='login'>
            <label htmlFor="username"></label>
            <input
                placeholder="username"
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            /><br></br>
            <label htmlFor="password"></label>
            <input
                placeholder="password"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            /><br></br>
            <label htmlFor="password_confirmation"></label>
            <input
                placeholder="confirm password"
                type="password"
                id="password_confirmation"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
            /><br></br>
            <button type="submit">Submit</button>
        </form>
        <footer>
            <span>Already have an account?</span><Link to="/login">Sign in</Link>
        </footer>
        </div>
    </div>
    </>
    );
}
export default Signup;