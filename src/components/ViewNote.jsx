import '../stylesheets/ViewNote.css'
import copyIcon from '../assets/copy-icon.png'
import toast from 'react-hot-toast'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'


const ViewNote = () => {
  const notes = useSelector((state=> state.note.value))

  const { id } = useParams();

  const note = notes.find((n)=> n._id === id);

  function handleCopy() {
    navigator.clipboard.writeText(note.content);
    toast.success("Note Copied to Clipboard");
  }


  return (
    <div className='main-viewNote'>
        <div className='div'>Your Title</div>

        <div className="top-viewNote">{note.title}</div>

        <div className="copy">
          <div className='div'>Your Content</div>
          <div className="copy-box" onClick={handleCopy}>
            <div>Copy</div>
            <img src={copyIcon} alt="" />
          </div>
        </div>
        
        <div className="bottom-viewNote">{note.content}</div>
    </div>
  )
}

export default ViewNote
