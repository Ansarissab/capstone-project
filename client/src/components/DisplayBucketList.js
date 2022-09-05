import React, { useEffect, useState } from 'react'

const DisplayBucketList = ({selectedActivity}) => {

  const [activityBucketList, setActivityBucketList] =useState([]);
      const [bucketList, setBucketList]= useState([])


  useEffect(() => {
    fetch("/bucket_lists")
    .then((r) => r.json())
    .then((response) => {
      setBucketList(response)
    })
  }, [])

    function addActivityToList(activity, bucketList) {
        // add api to create new bucket in db
        console.log(bucketList)
        let bucketId = bucketList.id

        fetch("/activity_bucket_lists", {
       method: "POST",
       headers: {
           "Content-Type": "application/json",
       },
       credentials: 'include',
       body: JSON.stringify(
          {
          bucket_list_id: bucketId,
          })
       }).then(r => r.json())
      .then(activities => console.log(activities))

    }
  
  return (
    <div>
      <h6>Existing Bucket List</h6>
      {bucketList.map((bucket, index) => {
        return <div key={index}>
          {bucket.name} 
          <button onClick={() => addActivityToList(bucket.id)}>
            Add In This List
          </button></div>
      })}
    </div>
    
  )
}

export default DisplayBucketList