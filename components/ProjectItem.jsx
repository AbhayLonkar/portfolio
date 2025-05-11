import React from 'react'

const ProjectItem = ({ image, title, subtitle, live, github, tech }) => {
  return (
    <div className='flex flex-col  border-gray-400 shadow-gray-400 hover:border-blue-400 hover:shadow-blue-400 cursor-pointer border-2 self-center rounded-xl p-3 shadow gap-2  md:mx-1 mx-5 md:h-78'>
      <h2 className='font-bold text-black text-xl text-center dark:text-white underline underline-offset-8'>{title}</h2>
      <div className='flex md:flex-row flex-col justify-center gap-2'>
        <div className=''>
          <img src={image} alt="project image" className='md:w-xl w-full md:h-40 object-contain rounded-lg' />
        </div>
        <div className='h-max flex flex-col gap-2' >
          <p className='mt-5 mx-2 text-sm md:h-25  overflow-y-auto text-gray-700 dark:text-white'>{subtitle}</p>
          <p className=' mx-2 font-bold text-sm text-gray-700 dark:text-white'>Technologies used: <span>{tech}</span> </p>
          <div className='flex gap-2 '>
            <a className='transition-colors duration-300 border-black border hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black rounded-full p-2 w-20 dark:border-white hover:cursor-pointer text-center' href={live} target='_blank' > Live</a>
            <a className='transition-colors duration-300 border  hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black border-black rounded-full p-2 w-20 dark:border-white hover:cursor-pointer text-center' href={github} target='_blank'>Github</a>
          </div>
        </div>
      </div>
    </div >
  )
}

export default ProjectItem
