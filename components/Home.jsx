import React from 'react'
import {AiFillX, AiOutlineCloudDownload} from "react-icons/ai";
import {GrLinkedin, GrTwitter} from "react-icons/gr";
import {TbHomeX} from "react-icons/tb";

const Home = () => {
    return (
        <section id={'home'} className={'w-full mt-10 p-4  font-mono flex items-center justify-center'}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center justify-center w-full">

                <div className={'md:p-10 flex gap-2 md:flex-row flex-row-reverse  w-full justify-center md:justify-end items-center'}>
                    <div className={'p-1 flex flex-col justify-center gap-2'}>
                        <GrLinkedin size={30} className={'text-blue-600'} />
                        <GrTwitter size={30} className={'text-blue-600'} />
                    </div>
                    <img src={'/images/Profile.png'} alt={'Profile'} className={'w-65'} />
                </div>

                <div className={'md:p-10'}>
                    <h1 className={'text-5xl text-slate-900 font-bold m-1'}>Hi, I'm Abhay</h1>
                    <p className={'text-3xl text-gray-500 m-1'}>App & Web Developer</p>
                    <p className={'m-1 text-lg text-gray-500'}>High level experience in web design and development knowledge, producing quality work.</p>
                    <button className={'mt-5 h-12 w-37 p-2 font-mono hover:bg-blue-600 rounded-full hover:text-white flex items-center justify-evenly gap-1 shadow-md transition-all hover:cursor-pointer border border-blue-600 bg-transparent text-blue-600'}>
                        <AiOutlineCloudDownload size={20} /> Download CV
                    </button>
                </div>

            </div>
        </section>
    )
}
export default Home
