import { AiOutlineCloudDownload } from "react-icons/ai";
import { CgMail } from 'react-icons/cg';
import { CiLinkedin } from 'react-icons/ci';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { VscGithub } from 'react-icons/vsc';

const Home = () => {
    return (
        <section id={'home'} className={' mt-10 md:h-full  font-mono flex  justify-center  dark:text-white text-gray-600 pb-16'}>
            <div className='w-300 m-auto'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2  justify-center h-max">

                    <div className={'md:p-10 md:px-5 flex gap-2 md:flex-row flex-row-reverse justify-center md:justify-end items-start'}>
                        <div className={'p-1 flex flex-col justify-center items-center  gap-2 h-full '}>
                            <a href="https://linkedin.com/in/abhaylonkar" target='_blank'><CiLinkedin size={30} className={'text-blue-600'} /></a>
                            <a href="https://github.com/abhaylonkar" target='_blank'><VscGithub size={24} className={'text-black dark:invert transition-colors duration-500'} /></a>
                            <a href="mailto:abhaylonkar9@gmail.com" target='_blank'><CgMail size={30} className={'text-red-500'} /></a>


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
                            <div className='flex gap-2 items-end text-black dark:text-gray-400'>
                                <FaReact size={30} className='text-blue-400' />
                                <SiTailwindcss size={30} className='text-blue-600' />
                                <FaNodeJs size={30} className='text-green-700' />
                                <p>... and more</p>
                            </div>

                            <button
                                className={'mt-5 h-12 w-37 p-3 font-mono hover:bg-blue-400 rounded-full hover:text-white flex items-center justify-evenly gap-1 shadow shadow-blue-400  transition-colors hover:cursor-pointer border border-blue-400 bg-transparent text-blue-400 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-black'}
                                onClick={() => {
                                    window.open('https://drive.google.com/file/d/1_jTmO6SEJcZ6jK3DWNjThz7jJneplSmt/view?usp=sharing', '_blank')
                                }}
                            >
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
