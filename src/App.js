import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/projects" element={<Projects/>}></Route>
          <Route path="/aboutme" element={<AboutMe/>}></Route>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
