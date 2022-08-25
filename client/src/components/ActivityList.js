import React from 'react'
import ActivityCard from './ActivityCard'
import { useState, useEffect } from 'react'
import BucketListModal from './BucketListModal'

const ActivityList = ({categories, onActivityClick}) => {
  // {categories ? console.log(categories) : console.log('no categories yet')} 

  const [activityBucketLists, setActivityBucketLists] = useState([])
  // const [bucketListModalOpen, setBucketListModalOpen] = useState(false)

  // function onCloseBucketListModal () {
  //   setBucketListModalOpen(false)
  // }
  

  useEffect(()=>{
  fetch("/activity_bucket_lists")
  .then((r)=>r.json())
  .then((activityBucketLists) => setActivityBucketLists(activityBucketLists))

  },[])

  

  return (
    <>
      <div>Categories with Activities List</div>
      {categories.map(category => 
      <ActivityCard key={category.id} 
                    category={category} 
                    onActivityClick={onActivityClick}
                    // onActivityClick={() => setBucketListModalOpen(true)}
      />
      )}
      {/* <BucketListModal open={bucketListModalOpen} handleClose={onCloseBucketListModal} /> */}
      
    </>
  )
}

export default ActivityList