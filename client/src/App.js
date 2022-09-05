// import { useState, useEffect } from "react";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Login from "./components/Login";
import  Home from "./components/Home";
import ActivityList from "./components/ActivityList";
import Note from "./components/Note";
import About from "./components/About";
import Signup from "./components/Signup";
import BucketListContainer from "./components/BucketListContainer";
import SignOut from "./components/SignOut"
import BucketListModal from "./components/BucketListModal";

function App(){
  
  const [user, setUser] = useState(null);
  const [ categories, setCategories] = useState([]);
  const [notes, setNotes] = useState([])
  const [bucketLists, setBucketLists] = useState([]);
  const [count, setCount] = useState([0])
  const [activities, setActivities] = useState([])
    const [bucketListModalOpen, setBucketListModalOpen] = useState(false)
    const [selectedActivity, setSelectedActivity] = useState(null)
    const [activityId, setactivityId] = useState([])

  const [userBucketLists, setUserBucketLists] = useState([])
  // const [reload, setReload] = useState(false);
  // const [e ,setE] = useState({})
  let navigate = useNavigate()


  useEffect(() => {
    fetch("/hello")
    .then((r) => r.json())
    .then((data) => setCount(data.count));
  }, []);
  
  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/categories")
    .then((r) => r.json())
    .then((categories) => setCategories(categories));
  }, []);



  function fetchBucketListData(){
     fetch("/bucket_lists")
    .then((r) => r.json())
    .then((bucketLists) => setBucketLists(bucketLists))
  }
 
  useEffect(()=>{
    fetchBucketListData()
  },[])


  useEffect(()=>{
    fetch("/activities")
    .then((r) => r.json())
    .then((activities) => setActivities(activities))
  },[])

  
function onCloseBucketListModal () {
    setBucketListModalOpen(false)
}
  

  function addToBucketList (activity,id){
    console.log(activity)
    console.log(id)
    setBucketListModalOpen(true)
    setSelectedActivity(activity)
    // setactivityId(id)
    // if (!bucketLists[id]){
    //   console.log(activity)
    //   setBucketLists([...bucketLists, activity])
    //   // prompt("Do you want to add this to your existing wishlist?\n- TestList 1\n- Ghana Trip\n\nTo put this in a new wish list, type the wishlist name");
    //   alert('Don3!')
    // }else{
    //   alert("Activity already in bucket list")
    // }
  }
console.log(activityId)

function logInPrompt (){
  alert("Please sign in to add activity to your bucket list")
}
//  useEffect(() => {
//     console.log(bucketLists)
//   }, [bucketLists])
 
  
  useEffect(()=>{
  fetch("/user_bucket_lists")
  .then((r)=>r.json())
  .then((userBucketLists) => setUserBucketLists(userBucketLists))
  },[])


  //   function handleClickE(x){
  //   setE(x)
  //   navigate(`/edit/${x.id}`)
  //   console.log(x)
  // }


  


  return (
   <>
    <Navbar user={user}/>
    <BucketListModal selectedActivity={selectedActivity} open={bucketListModalOpen} handleClose={onCloseBucketListModal} activities={activities} activityId={activityId} bucketLists={bucketLists}/>

    <main>
      {user ? (
        <Routes>
         <Route path="/home" element={<Home categories={categories} activities={activities}/>} /> 
      <Route path="/about" element={<About/>} />
          <Route path="/categories" element={<ActivityList 
            categories={categories} 
            activities={activities}
            onActivityClick={addToBucketList}/>} />
          <Route path="/bucket_lists" element={<BucketListContainer 
            activities={activities}
            notes={notes} 
            bucketLists={bucketLists} 
            setBucketLists={setBucketLists}/>}/>
          <Route path="/signout" element={<SignOut/>} />
    </Routes>
    ):(
    <Routes>
           <Route path="/home" element={<Home/>} /> 
           <Route path="/about" element={<About/>} /> 
          <Route path="/categories" element={<ActivityList 
            categories={categories} 
            activities={activities}
            onActivityClick={logInPrompt}
            />} />
          <Route path="/login" element={<Login setUser={setUser}/>} />
          <Route path="/signup" element={<Signup/>} />
    </Routes>        
       )}
    </main>
    </>
       
  );
}

export default App;