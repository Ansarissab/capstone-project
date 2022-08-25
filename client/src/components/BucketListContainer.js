import React, { useEffect, useState } from 'react'
import ActivityCard from './ActivityCard'

import BucketListForm from './BucketListForm'
import CreatedBucketLists from './CreatedBucketLists'

const BucketListContainer = () => {
  const [bucketLists, setBucketLists] = useState([])

   function handleBucketList(activity) {
    let id = activity.id;
    console.log(id);
    fetch(`/bucket_lists/${id}`, {
        method: "PATCH",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({ activity_id: id }),
    }).then((res) => res.json());
    setTimeout(() => {
      alert('Item added to bucket list!')
    }, 1000)
    }

   return(
    <div>
      <h4>
        See your bucket list here. 
      </h4>
      <CreatedBucketLists/>
     
    </div>
    
   )
}

export default BucketListContainer