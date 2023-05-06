import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Navbar/>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/projects" element={<Projects/>}></Route>
          <Route path="/aboutme" element={<AboutMe/>}></Route>
          <Route path="/contact" element={<ContactMe/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
