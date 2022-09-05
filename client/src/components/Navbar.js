import React from 'react'
import {  Link, useNavigate } from 'react-router-dom'

const Navbar = ({user, setUser}) => {
  let navigate = useNavigate()

  function handleLogout (e) {
    // e.preventdefault();
    fetch(`/signout`, {
        method: "DELETE"
    })
        .then((res)=>{
            if (res.ok){
                setUser(null)
            }
            navigate('/signin')
        })
    navigate('/signin')
    
  }

  return (

    <header>
         <br/><br/>                
         <Link to="/home" className='home-link-logo' >Website Name</Link>
            <br/>
                <Link to="/home" className='home-link' >Home</Link><br />
                <Link to="/about" className='about-link'>About</Link><br />
                <Link to="/categories" className='category-link'>Categories</Link><br />
                
                 {user ? (
                <>
                 <Link to="/bucket_lists">Bucket List</Link> <br/>
                 <Link to="/signout" onClick={()=> handleLogout() }>Sign Out</Link>
                 </>)
                 : <Link to="/login"className='login-link'>Login</Link>}
                 <br/><br/>
    </header>
  );
}

export default Navbar