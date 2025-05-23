import React, { useEffect, useState } from 'react'
import { IoMdHome } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { SiPolymerproject } from "react-icons/si";
import { TiContacts } from "react-icons/ti";
import { AiOutlineGithub } from "react-icons/ai";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Navbar = ({ activeTab, setActiveTab }) => {
    const [darkMode, setDarkMode] = useState(() => localStorage.getItem('is-dark') === 'true');

    const toggleDarkMode = () => {
        setDarkMode(prev => !prev);
    }

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('is-dark', darkMode.toString());
    }, [darkMode]);

    const tabs = [
        { name: "Home", icon: <IoMdHome size={22} className={activeTab === "Home" ? 'md:text-black text-white dark:text-black' : ''} /> },
        { name: "About", icon: <FaUser size={18} className={activeTab === "About" ? 'md:text-black text-white dark:text-black' : ''} /> },
        { name: "Project", icon: <SiPolymerproject size={20} className={activeTab === "Project" ? 'md:text-black text-white dark:text-black' : ''} /> },
        { name: "Contact", icon: <TiContacts size={20} className={activeTab === "Contact" ? 'md:text-black text-white dark:text-black' : ''} /> },
    ]

    const handleChangeTab = (tab) => {
        window.scrollTo(0, 0);
        setActiveTab(tab);
    }

    return (<>
        <nav className='flex md:justify-around justify-between p-5 mt-2  h-10 items-center '>
            <h3 className='text-2xl font-bold font-poppins dark:text-white font-mono'>Abhay Lonkar</h3>
            <div className={'flex items-center justify-center gap-4 '}>
                <AiOutlineGithub size={30} className={'dark:invert hover:cursor-pointer'} onClick={() => window.open('https://github.com/AbhayLonkar', '_blank')} />
                {darkMode ? <MdLightMode size={30} className={`cursor-pointer dark:invert`} onClick={toggleDarkMode} /> :
                    <MdDarkMode size={30} className={'cursor-pointer'} onClick={toggleDarkMode} />}
            </div>
        </nav>
        <nav className='md:flex justify-center items-center text-sm dark:text-white hidden'>
            <ul className='flex gap-2 rounded-3xl shadow-md p-2 px-3 items-center min-w-104 dark:border-b-1 border-blue-400'>
                {tabs.map((tab, index) => {
                    return (
                        <li
                            key={index}
                            className={`p-2 px-4 font-mono  rounded-3xl flex gap-2 cursor-pointer transition-colors ease-linear  ${activeTab === tab.name ? 'bg-blue-400' : ''}`}
                            onClick={() => handleChangeTab(tab.name)}
                        >
                            {tab.icon} {activeTab === tab.name ? "" : tab.name}
                        </li>
                    )
                })}
            </ul>
        </nav>

        <nav className={'fixed z-10 bottom-0 right-0 border-t-1 w-full flex items-center h-15 rounded-t-2xl bg-gray-400/30 backdrop-blur-2xl dark:border-t-blue-400 md:hidden'}>
            <ul className={'grid grid-cols-4 w-full'}>
                {tabs.map((tab, index) => {
                    return (
                        <li
                            key={index}
                            className={`p-2 px-4 flex flex-col items-center justify-center gap-2 cursor-pointer transition-colors dark:text-white text-xs `}
                            onClick={() => handleChangeTab(tab.name)}
                        >
                            {tab.icon}
                            <span className={`${activeTab === tab.name ? 'text-white dark:text-black' : 'text-black dark:text-white'}`}>{tab.name}</span>
                        </li>
                    )
                })}
            </ul>
        </nav>
    </>
    )
}
export default Navbar
