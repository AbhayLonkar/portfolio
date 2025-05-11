import './App.css'
import Navbar from "../components/Navbar.jsx";
import { useState } from "react";
import Home from "../components/Home.jsx";
import About from "../components/About.jsx";
import Contact from "../components/Contact.jsx";
import { Project } from "../components/Project.jsx";

function App() {
  const [activeTab, setActiveTab] = useState("Home");
  return (
    <div className={`relative h-[100%]  transition-colors duration-500`}>


      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "Home" && <Home />}
      {activeTab === "About" && <About />}
      {activeTab === "Project" && <Project />}
      {activeTab === "Contact" && <Contact />}

    </div>
  )
}

export default App
