import React, { useState } from 'react'
import '../stylesheets/AllNotes.css'
import { useDispatch, useSelector } from 'react-redux'
import { deleteNote } from '../features/notes/notesSlice'
import viewIcon from '../assets/view-icon.png'
import deleteIcon from '../assets/delete-icon.png'
import editIcon from '../assets/edit-icon.png'
import copyIcon from '../assets/copy-icon.png'
import calendarIcon from '../assets/calendar-icon.png'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'


const AllNotes = () => {
  const notes = useSelector((state)=> state.note.value);
  
  const [searchText, setSearchText] = useState('');

  const dispatch = useDispatch();

  const filteredData = notes.filter((note) =>
    note.title.toLowerCase().includes(searchText.toLowerCase())
  )

  function handleDeleteNote(noteId) {
    dispatch(deleteNote({_id: noteId}))
  }

  function handleCopyNote(note) {
    navigator.clipboard.writeText(note.content);
    toast.success("Note Copied to Clipboard");
  }
  

  return (
    <div className='main-allNotes'>
      <div>
        <input
          type="search"
          placeholder='Search Notes here'
          value={searchText}
          onChange={(e)=> setSearchText(e.target.value)}
          id='search-bar'
        />
      </div>

      <div className="all-notes">
        {
          filteredData.length > 0 && filteredData.map((note) => {
            return (
              <div className="note" key={note?._id}>

              <div className="note-layer">
                <div className="date">
                  <img src={calendarIcon} alt="" />
                  <div>{note.createdAt}</div>
                </div>

                <div className="buttons">
                  <div onClick={()=> handleDeleteNote(note._id)}><img src={deleteIcon} alt="" /></div>
                  <div><Link to={`/notes/edit/${note?._id}`}><img src={editIcon} alt="" /></Link></div>
                  <div><Link to={`/notes/${note?._id}`}><img src={viewIcon} alt="" /></Link></div>
                  <div onClick={()=> handleCopyNote(note)}><img src={copyIcon} alt="" /></div>
                </div>
              </div>

              <div className="note-content">
                <div id="title-area">{note.title}</div>
                <div id="content-area">{note.content}</div>
              </div>

            </div>
            ) 
          })
        }
      </div>
      
    </div>
  )
}

export default AllNotes
