import React from 'react'
import ProjectItem from './ProjectItem'

const projects = [
    {
        title: "AiEnhance",
        subtitle: "An Ai powered image enhancer! Upload your image and watch it transform into a higher-resolution version in one click.",
        image: "/projects/aienhance.png",
        live: "https://aienhance.vercel.app/",
        github: "https://github.com/AbhayLonkar/AiEnhance"
    }
]

export const Project = () => {
    return (
        <section id='project' className={'mt-10 md:h-full  font-mono flex flex-col items-centers justify-center  dark:text-white text-gray-600 pb-16'}>
            <h1 className={'text-center text-4xl text-black mb-10 font-bold dark:text-white'}>My Projects</h1>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-2  self-center'>

                {projects.map(item => (
                    <ProjectItem title={item.title} subtitle={item.subtitle} image={item.image} github={item.github} live={item.live} />
                ))}

            </div>
        </section>
    )
}
