import { React, useState } from 'react'
import ActivityList from './ActivityList'
import { useEffect } from 'react-router-dom'

const BucketListForm = ({ user, bucketLists, activity,  onActivityClick }) => {

    const [name, setName] = useState('')
    const [activities, setActivities]= useState([])

    function addActivity(){
      
       fetch("/bucket_lists", {
       method: "POST",
       headers: {
           "Content-Type": "application/json",
       },
       body: activities,
       }).then(r => r.json())
       .then(data => setActivities(activities) )
   
    }    
    
    function handleSubmit(e) {
        e.preventDefault()
        this.props.addActivity(this.state.activity)
    }

    
  return (
        <div>
        <form className="post-form" >
            <div className="input-field">
                <label htmlFor='title'>Name this bucket list:</label><br></br>
                <input 
                        type='text' 
                        name='name' 
                        value={name}
                        className='content-input'
                        placeholder="name"
                        onChange={(e)=>setName(e.target.value)}
                    /><br></br>
                <button type='submit' onSubmit={handleSubmit} onClick={onActivityClick}>Create Bucket List</button>
            </div>
        </form>  
        </div>

  )
}

export default BucketListForm

