import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import CreatedBucketLists from './CreatedBucketLists';

const Note = ({user, bucketId, bucketList}) => {
  console.log(bucketId)
  console.log(bucketList)
  const [notes, setNotes] = useState([])

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    
    let navigate = useNavigate()
    //  let id = bucketList.id
      useEffect(()=>{
    fetch("/notes")
    .then((r) => r.json())
    .then((notes) => setNotes(notes))
  },[])

  function addToNotes(bucketId, id){
    console.log(bucketId)
   fetch("/notes",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify( {
           bucket_list_id: bucketId,
          title,content
        } ),
     }).then(r =>r.json())
     setTitle('')
     setContent('')
  }

    function handleSubmit(e){
        e.preventDefault()
  
        console.log(e)
        addToNotes()
       

      }
      
     

  return (
    <>
    <div className="note-container">
        <h4>Create a note</h4>
     <form action="submit" onSubmit={handleSubmit}>
        <div className="input-field">
            <label htmlFor='title'>Title:</label><br></br>
            <input className="title-input"
                    type='text' 
                    name='title' 
                    value={title}
                    placeholder="title"
                    onChange={(e)=>setTitle(e.target.value)}
            /><br></br>
            <label htmlFor='content'> Content: </label><br></br>
            <input className="content-input"
                type='text' 
                name='note' 
                value={content}
                placeholder="content"
                onChange={(e)=>setContent(e.target.value)}
            /><br></br>
            <button>Create Note</button>
        </div>
     </form>
    </div>
    </>
  )
}

export default Note