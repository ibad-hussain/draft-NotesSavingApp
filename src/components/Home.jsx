import React, { useState } from 'react'
import '../stylesheets/Home.css'
import { useDispatch } from 'react-redux'
import { createNote } from '../features/notes/notesSlice'
import toast from 'react-hot-toast'


const Home = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const dispatch = useDispatch();

    function handleCreateNote() {
        if(title==="" || content==="") {
            toast.error("Note is empty")
        } else {
            const note = {
                title: title,
                content: content,
                _id: Date.now().toString(36),
                createdAt: new Date().toLocaleDateString('en-GB', {  
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    hour12: true
                }) 
            }
    
            dispatch(createNote(note));
            setTitle('');
            setContent('');
        }
    }


  return (
    <div className='main-home'>

        <div className="top">
            <input
                type="text"
                placeholder='Enter Title here'
                value={title}
                onChange={(e)=> setTitle(e.target.value)}
                required
                id='title'
            />

            <button className='create-btn' onClick={handleCreateNote}>
                Create Note
            </button>
        </div>

        <div className="bottom">
            <textarea
                placeholder='Enter Content here'
                value={content}
                onChange={(e)=> setContent(e.target.value)}
                id='content'
            />
        </div>

    </div>
  )
}

export default Home
