import React, { useEffect, useState } from 'react'
import '../stylesheets/Home.css'
import { useDispatch, useSelector } from 'react-redux'
import { editNote } from '../features/notes/notesSlice'
import { useParams, useNavigate } from 'react-router-dom'


const EditNote = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const notes = useSelector((state=> state.note.value))

    const { id } = useParams();

    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(() => {
      const note = notes.find((n)=> n._id === id);
      if (note) {
        setTitle(note.title);
        setContent(note.content);
      }
    }, [id, notes])

    function handleEditNote() {
        const note = {
            title: title,
            content: content,
            _id: id,
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

        dispatch(editNote(note));
        navigate('/notes');
    }


  return (
    <div className='main-home'>

        <div className="top">
            <input
                type="text"
                placeholder='Enter Title here'
                value={title}
                onChange={(e)=> setTitle(e.target.value)}
                id='title'
            />

            <button className='create-btn' onClick={handleEditNote}>
                Edit Note
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

export default EditNote
