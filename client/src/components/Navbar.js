import React from 'react'
import { SearchIcon, UserIcon, ShoppingBagIcon, XIcon } from '@heroicons/react/outline'
import { useNavigate } from 'react-router-dom'



const Navbar = ({user}) => {
    let navigate = useNavigate()

    function loginClick(){
        user ? navigate.push('/user') : navigate.push('/login')
    }
    function aboutClick(){
        navigate.push('/about')
    }
    function categoriesClick(){
        navigate.push('/categories')
    }
    function homeClick(){
        navigate.push('/home')
    }
    function bucketListClick(){
        navigate.push('/bucketList')
    }

    


  return (
    <header>
        <div className='container'></div>
            <div className='container-section'></div>
                <div className='home-link' onClick={homeClick}>
                    {/* <img src="" alt="" /> add logo image here */}
                    <h1>Website Name</h1>
                </div>
                <h5 className='about-link' onClick={aboutClick}>ABOUT</h5>
            <div>
                <h5>{user ? `Welcome, ${user.name}.` : null}</h5>
                {user ? <h5 onClick={bucketListClick}>Bucket</h5> : null}
            </div>
    </header>
  );
}

export default Navbar