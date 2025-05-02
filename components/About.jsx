import React from 'react'

const About = () => {
    return (
        <section id='about' className={'mt-10 md:h-full  font-mono flex flex-col items-centers justify-center  dark:text-white text-gray-600 pb-16'}>
            <h1 className={'text-center text-4xl text-black mb-2 font-bold dark:text-white'}>About Me</h1>
            <h3 className={'text-center text-lg text-gray-500 dark:text-gray-200'}>My introduction</h3>
            <div className='grid md:grid-cols-2 grid-cols-1 mt-10 px-10 justify-center gap-2'>
                <div className='px-1 flex justify-center md:justify-end'>
                    <img src="/public/images/Profile2.png" alt="profile image" className='w-65' />
                </div>
                <div className=' p-3 text-md w-120'>
                    Aspiring android developer with hands-on internship experience, currently expanding skills in mobile app development
                    using Java and Kotlin. Strong foundation in web development with expertise in HTML, CSS, JavaScript, and React.js.
                    Passionate about building responsive, user-friendly applications across platforms.

                </div>
            </div>
        </section>
    )
}
export default About
