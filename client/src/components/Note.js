import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';


const Note = ({user, notes, bucketList}) => {


    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [isPending, setIsPending]= useState(false)
    
    const navigate = useNavigate()
    // let id = bucketList.id

    function handleSubmit(e){
        e.preventDefault()
        const noteContent = { title, content }

        setIsPending(true)
        console.log(e)

        // fetch('/notes',{
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //         body: JSON.stringify( noteContent ),
        // }).then(() =>{
        //     console.log('new note added')
        //     setIsPending(false)
        //     navigate('/bucket_lists')
        // });

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
            <button>{isPending ? "Creaating Note..." : "Create Note"}</button>
        </div>
     </form>
    </div>
    </>
  )
}

export default Note