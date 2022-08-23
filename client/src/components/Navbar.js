import React from 'react'
//import { SearchIcon, UserIcon, ShoppingBagIcon, XIcon } from '@heroicons/react/outline'
import {  Link, useNavigate } from 'react-router-dom'




const Navbar = ({user, setUser}) => {
  let navigate = useNavigate()
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

    <header>
        <div className='container'></div>
            <div className='container-section'></div>
                <Link to="/home" className='home-link-logo' >Website Name</Link>
            <div>
                <Link to="/home" className='home-link' >Home</Link><br />
                <Link to="/about" className='about-link'>About</Link><br />
                <Link to="/categories" className='category-link'>Categories</Link><br />
                
                 {user ? (
                <>
                 <Link to="/bucket_lists">Bucket List</Link> <br/>
                 <Link to="/signout" onClick={()=> handleLogout() }>Sign Out</Link>
                 </>)
                 : <Link to="/login"className='login-link'>Login</Link>}
            </div>
    </header>
  );
}

export default Navbar