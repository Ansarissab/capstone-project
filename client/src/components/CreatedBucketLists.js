import React, { useEffect, useState } from 'react'
import Note from './Note'


const CreatedBucketLists = ({selectedActivity}) => {

  const [activityBucketList, setActivityBucketList] =useState([]);


  useEffect(() => {
    fetch("/activity_bucket_lists")
    .then((r) => r.json())
    .then((response) => {
      console.log(response);
      setActivityBucketList(response)
    })


  }, [])

  function addActivityToList(bucketId) {
console.log(bucketId)
console.log(selectedActivity)
  }


 function handleId(e){
    console.log(e)
 }
  
  return (
    <div>
      <h6>Created Bucket Lists</h6>
      {activityBucketList.map((list) => {
        return <div key={list.id} onClick={(e)=>{handleId(list)}}>
          <div>{list.activity.name}</div>
          <a href={list.activity.image_url}>
            <img src={list.activity.image_url} alt="activity" />
          </a>

          </div>
      })}
     
    </div>
    
  )
}

export default CreatedBucketLists