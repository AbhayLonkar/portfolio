import { AiOutlineGithub } from 'react-icons/ai'
import './App.css'
import Navbar from "../components/Navbar.jsx";
import {useState} from "react";
import Home from "../components/Home.jsx";
import About from "../components/About.jsx";
import Contact from "../components/Contact.jsx";
import {Project} from "../components/Project.jsx";

function App() {
    const [activeTab, setActiveTab] = useState("Home");
  return (
    <div className='h-[100vh] w-[100vw] bg-white'>
      <nav className='flex justify-around p-3'>
        <h3 className='text-2xl font-bold font-mono '>Abhay Lonkar</h3>
        <div>
          <AiOutlineGithub size={30} />
        </div>
      </nav>

      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

        {activeTab === "Home" && <Home />}
        {activeTab === "About" && <About />}
        {activeTab === "Project" && <Project />}
        {activeTab === "Contact" && <Contact />}

    </div>
  )
}

export default App
