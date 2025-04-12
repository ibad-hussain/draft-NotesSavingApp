import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';


const initialState = {
  value: localStorage.getItem("notes")
    ?   JSON.parse(localStorage.getItem("notes"))
    :   []
}


export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    createNote: (state, action) => {
      const note = action.payload;

      const exists = state.value.some((n) => n._id === note._id);
      if (!exists) {
        state.value.push(note);
        localStorage.setItem("notes", JSON.stringify(state.value));
        toast.success("Note Created Successfully");
      } else {
        toast.error("Duplicate Note");
      }
    },

    editNote: (state, action) => {
      const note = action.payload;
      const index = state.value.findIndex((item) => item._id === note._id)
      if (index >= 0) {
        state.value[index] = note;
        localStorage.setItem("notes", JSON.stringify(state.value));
        toast.success("Note Updated Successfully");
      }
    },

    deleteNote: (state, action) => {
      const noteId = action.payload._id;
      const index = state.value.findIndex((item) => item._id === noteId)
      if (index >= 0) {
        state.value.splice(index, 1);
        localStorage.setItem("notes", JSON.stringify(state.value));
        toast.success("Note Deleted Successfully");
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { createNote, editNote, deleteNote } = notesSlice.actions

export default notesSlice.reducer