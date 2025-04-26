import React from 'react'
import {IoMdHome} from "react-icons/io";
import {FaUser} from "react-icons/fa";
import {SiPolymerproject} from "react-icons/si";
import {TiContacts} from "react-icons/ti";

const Navbar = ({activeTab, setActiveTab}) => {

const tabs = [
    {name: "Home", icon: <IoMdHome size={22} />},
    {name: "About", icon: <FaUser size={18} />},
    {name: "Project", icon: <SiPolymerproject size={20} />},
    {name: "Contact", icon: <TiContacts size={20} />},
]

    return (
        <nav className='flex justify-center items-center text-sm'>
            <ul className='flex gap-2 rounded-3xl shadow-md p-2 px-3 items-center w-95'>
                {tabs.map((tab, index) => {
                    return (
                        <li
                            key={index}
                            className={`p-2 px-3  rounded-3xl flex gap-2 cursor-pointer transition-colors ease-linear ${activeTab === tab.name? 'bg-slate-300': ''}`}
                            onClick={() => setActiveTab(tab.name)}
                        >
                            {tab.icon} {activeTab === tab.name ? "" : tab.name }
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
export default Navbar
