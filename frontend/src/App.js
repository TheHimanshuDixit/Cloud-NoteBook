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

function App() {

  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <div>
            <Routes>
              <Route exact path="/" element={<Home  />} />
              <Route exact path="/about" element={<About  />} />
              <Route exact path="/notes" element={<Notes  />} />
              <Route exact path="/login" element={<Login  />} />
              <Route exact path="/signup" element={<Signup  />} />
              <Route exact path="/contact" element={<Contactus  />} />
              <Route exact path="/*" element={<Notfound  />} />
            </Routes>
          </div>
          < Footer />
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
