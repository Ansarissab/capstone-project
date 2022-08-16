import React from 'react'
import ActivityCard from './ActivityCard'
import Note from './Note'

const BucketListContainer = ({user, activities,removeActivity, notes, addNote, removeNote}) => {
    const activityCard = activities.map((item)=>{
        return<ActivityCard key={item.id} activity={item}
        handleRemove={removeActivity} />
    })

    const notesCard = notes.map((item)=>{
        return<Note key={item.id} activity={item}
        handleRemove={removeNote} />
    })

  if (user) {
  return (
    <>
     <div className="activity-container">
        <h3>See Your Activities Here</h3>
        <div>{activityCard}</div>
     </div>
     <div>
        <h3>Add A Note</h3>
        <div>{notesCard}</div>
    </div>
     
    </>
  )
  } else {
    return (
        <h4>Please sign in to create Bucket List</h4>
        )
  }
}

export default BucketListContainer