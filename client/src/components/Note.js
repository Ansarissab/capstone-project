import React, { useState, useEffect} from 'react'


const Note = ({user, notes}) => {


    const [title, setTitle] = useState('')
    const [note, setNote] = useState('')
    let id = user.id

    function handleSubmit(e){
        e.preventDefault()
        fetch('/posts',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
                body: JSON.stringify({
                    title: title,
                    note: note
                }),
        }).then(r => r.json());
        setTitle('')
        setNote('')

    }

  return (
    <div>Note</div>
  )
}

export default Note