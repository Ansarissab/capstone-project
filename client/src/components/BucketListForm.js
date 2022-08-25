import { React, useState } from 'react'
import ActivityList from './ActivityList'
import { useEffect } from 'react-router-dom'

const BucketListForm = ({ user, bucketLists, activityId,  onActivityClick }) => {

    const [name, setName] = useState('')
    const [activities, setActivities]= useState([])

    
    console.log(activityId)
    function addToBucketList(activityId) {
        // add api to create new bucket in db

        fetch("/create_bucket_list_and_activities", {
       method: "POST",
       headers: {
           "Content-Type": "application/json",
       },
       credentials: 'include',
       body: JSON.stringify(
        {name, activity_id: activityId})
       }).then(r => r.json())
       
      setName('')
    console.log(activityId)
    }
    
    function handleSubmit(e) {
        e.preventDefault()
        console.log("submitting the form");
        addToBucketList()
        // this.props.addActivity(this.state.activity)
        // onActivityClick()
    }

    
  return (
        <div>
        <form className="post-form" onSubmit={handleSubmit} >
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
                <button type='submit'>Create Bucket List</button>
            </div>
        </form>  
        </div>

  )
}

export default BucketListForm

