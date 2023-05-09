import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Projects from './pages/Projects';
import AboutMe from './pages/AboutMe'
import Home from './pages/Home';
import Footer from './components/Footer';
import ProjectDetails from './pages/ProjectDetails';

function App() {
  return (
    <div>
      <Navbar/>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/projects" element={<Projects/>}></Route>
          <Route path="/projects/:id" element={<ProjectDetails/>}></Route>
          <Route path="/aboutme" element={<AboutMe/>}></Route>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
