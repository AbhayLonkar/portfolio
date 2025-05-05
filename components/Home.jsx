import React from 'react'
import { AiOutlineCloudDownload } from "react-icons/ai";
import { GrLinkedin, GrTwitter } from "react-icons/gr";

const Home = () => {
    return (
        <section id={'home'} className={' mt-10 md:h-full  font-mono flex  justify-center  dark:text-white text-gray-600 pb-16'}>
            <div className='w-300 m-auto'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2  justify-center h-max">

                    <div className={'md:p-10 md:px-5 flex gap-2 md:flex-row flex-row-reverse justify-center md:justify-end items-start'}>
                        <div className={'p-1 flex flex-col justify-center  gap-2 h-full'}>
                            <GrLinkedin size={30} className={'text-blue-600'} />
                            <GrTwitter size={30} className={'text-blue-600'} />
                        </div>
                        <img src={'/images/Profile.png'} alt={'Profile'} className={'w-65'} />
                    </div>

                    <div className={'flex justify-center md:justify-start'}>
                        <div className={'md:py-10 md:px-5 py-5 p-1 w-4/5 text-left'}>
                            <h4 className={'md:text-lg text-md m-1'}>
                                <span className={'text-red-400'}>&lt;span&gt;</span> Hey, I'm Abhay <span className={'text-red-400'}>&lt;/span&gt;</span>
                            </h4>
                            <p className={'text-3xl  my-3'}>
                                <span className={'text-green-400'}> &#123;Full Stack&#125;</span> Web & App Developer
                            </p>
                            <p className={'m-1 text-md '}>
                                <span className={'text-red-400'}>&lt;p&gt;</span>
                                With expertise in cutting-edge technologies such as <span className={'text-red-400'}>NodeJS, React, TailwindCSS</span> and <span className={'text-red-400'}>React Native</span>... I deliver web solutions that are both innovative and robust.
                                <span className={'text-red-400'}>&lt;/p&gt;</span>
                            </p>
                            <button className={'mt-5 h-12 w-37 p-2 font-mono hover:bg-blue-400 rounded-full hover:text-white flex items-center justify-evenly gap-1 shadow-md transition-colors hover:cursor-pointer border border-blue-400 bg-transparent text-blue-400 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-black'}>
                                <AiOutlineCloudDownload size={20} /> Download CV
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Home
