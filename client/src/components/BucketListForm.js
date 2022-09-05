import { React, useState } from 'react'
import ActivityList from './ActivityList'
import { useEffect } from 'react-router-dom'

const BucketListForm = ({ user, bucketLists, activityId,  onActivityClick, activities}) => {
    const [name, setName] = useState('')
console.log(activities.id)
     const [activity, setActivity]= useState([])
    function addToBucketList(activities, activityId,bucketLists) {
        // let bucketId=bucketLists.id
        console.log(bucketLists)
        let bucketId = bucketLists.id
        let id=activities.id
        console.log(id)

       fetch("/bucket_lists", {
       method: "POST",
       headers: {
           "Content-Type": "application/json",
       },
       credentials: 'include',
       body: JSON.stringify(
        {
        name,
        activity_id: id
       
        })
       }).then(r => r.json())
       setName('')
       setActivity(activities.id)

    }
    
    function handleSubmit(e) {
        e.preventDefault()
        console.log("submitting the form");
        addToBucketList(activityId,bucketLists,activities)
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

