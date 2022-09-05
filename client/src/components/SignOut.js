import React from 'react'
import { useNavigate } from 'react-router-dom'

function SignOut({ user, setUser }) {
    let navigate = useNavigate()

    // console.log(user.name)

    function handleLogout (e) {

        e.preventDefault();
        fetch(`/signout`, {
            method: "DELETE"
        })
            .then((res)=>{
                if (res.ok){
                    setUser(null)
                }
            })
        navigate('/login')
    
    }

    return (
        <div>
            you have successfully signed out. Goodbye
        </div>
    )
}

export default SignOut