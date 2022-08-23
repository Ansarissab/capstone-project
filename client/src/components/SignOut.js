import React from 'react'
import { useNavigate } from 'react-router-dom'

function SignOut({ user, setUser }) {
    let navigate = useNavigate()

    // console.log(user.name)

    function handleLogout (e) {

        fetch(`/signout`, {
            method: "DELETE"
        })
            .then((res)=>{
                if (res.ok){
                    setUser(null)
                }
            })
        navigate('/signin')
    
    }

    return (
        <div>
            sign 
        </div>
    )
}

export default SignOut