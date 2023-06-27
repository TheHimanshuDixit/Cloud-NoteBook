import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Login from './components/Login';
import Signup from './components/Signup';
import Notes from './components/Notes';
import Footer from './components/Footer';
import Contactus from "./components/Contactus";
import Notfound from "./components/Notfound";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


function App() {

  const callSuccess = (msg) => {
    toast.success(msg, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
    });
  }

  const callError = (msg) => {
    toast.error(msg, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
    });
  }


  return (
    <>
      <NoteState>
        <ToastContainer />
        <BrowserRouter>
          <Navbar callSuccess={callSuccess} callError={callError} />
          <div>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About callSuccess={callSuccess} callError={callError} />} />
              <Route exact path="/notes" element={<Notes callSuccess={callSuccess} callError={callError} />} />
              <Route exact path="/login" element={<Login callSuccess={callSuccess} callError={callError} />} />
              <Route exact path="/signup" element={<Signup callSuccess={callSuccess} callError={callError} />} />
              <Route exact path="/contact" element={<Contactus callSuccess={callSuccess} callError={callError} />} />
              <Route exact path="/*" element={<Notfound callSuccess={callSuccess} callError={callError} />} />
            </Routes>
          </div>
          < Footer />
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
