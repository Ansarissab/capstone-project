import React from 'react'
//import Navbar from './Navbar'
//import Footer from './Footer'
import Hero from './Hero'
import ActivityList from './ActivityList'
import BucketListContainer from './BucketListContainer'

const Home = (user, activities, setActivities, categories, setCategories,getData, handleClickE, setReload) => {
  return (
    <div>
        <Hero/>
        <ActivityList/>
        <BucketListContainer user={user} activities={activities} setActivities={setActivities} categories={categories} 
        setCategories={setCategories} getData={getData} handleClickE={handleClickE} setReload={setReload} />   

    </div>
  )
}

export default Home