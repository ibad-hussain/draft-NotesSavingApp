import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import AllNotes from './components/AllNotes';
import ViewNote from './components/ViewNote';
import EditNote from './components/EditNote';


let router = createBrowserRouter([
  {
    path: "/",
    element:
    <div>
      <Navbar />
      <Home />
    </div>
  },
  {
    path: "/notes",
    element:
    <div>
      <Navbar />
      <AllNotes />
    </div>
  },
  {
    path: "/notes/edit/:id",
    element:
    <div>
      <Navbar />
      <EditNote />
    </div>
  },
  {
    path: "/notes/:id",
    element:
    <div>
      <Navbar />
      <ViewNote />
    </div>
  }
])


function App() {
  return (
    <div className="main-app">
      <div className="main-content">
        <RouterProvider router={router} />
      </div>
      
      <div className="main-footer">
        <div className="footer">
          <p>Think. Write. Remember.</p>
          <p>Your Personalized Notes Saving App</p>
        </div>
      </div>
    </div>
  )
}

export default App
