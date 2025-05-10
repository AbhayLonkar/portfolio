import React from 'react'
import ProjectItem from './ProjectItem'

const projects = [
    {
        title: "AiEnhance",
        subtitle: "An Ai powered image enhancer! Upload your image and watch it transform into a higher-resolution version in one click.",
        image: "/projects/aienhance.png",
        live: "https://aienhance.vercel.app/",
        github: "https://github.com/AbhayLonkar/AiEnhance"
    },
    {
        title: "Chess Web App",
        subtitle: "Developed an interactive chess game using JavaScript and the chess.js library. Utilized external libraries to enhance the gaming experience.",
        image: "/projects/chess-game.png",
        live: "https://abhaylonkar.github.io/chess/",
        github: "https://github.com/AbhayLonkar/chess.git",
    },
    {
        title: "News Android App",
        subtitle: "Created a real-time news app showcasing Nagpur's latest updates. Eliminiated reptitive content by sorting news based on dates.",
        image: "/projects/news-app.png",
        live: "https://github.com/AbhayLonkar/news-app",
        github: "https://github.com/AbhayLonkar/news-app",
    },
]

export const Project = () => {
    return (
        <section id='project' className={'mt-10 md:h-full  font-mono flex flex-col items-centers justify-center  dark:text-white text-gray-600 pb-16'}>
            <h1 className={'text-center text-4xl text-black mb-10 font-bold dark:text-white'}>My Projects</h1>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-2 self-center w-auto p-2 md:mx-5 '>

                {projects.map((item, index) => (
                    <ProjectItem key={index} title={item.title} subtitle={item.subtitle} image={item.image} github={item.github} live={item.live} />
                ))}

            </div>
        </section>
    )
}
