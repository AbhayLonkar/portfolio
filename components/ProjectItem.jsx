import React from 'react'

const ProjectItem = ({ image, title, subtitle, live, github }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 md:w-xl w-[90%] border-gray-400 border self-center rounded-xl p-3 shadow-lg gap-2 h-max md:mx-1 mx-5'>
      <div className='flex justify-center items-center'>
        <img src={image} alt="project image" className='w-full  rounded-lg' />
      </div>
      <div >
        <h2 className='font-bold text-black text-xl text-center dark:text-white underline underline-offset-8'>{title}</h2>
        <p className='mt-5 m-2'>{subtitle}</p>
        <div className='flex gap-2'>
          <a className='border-black border rounded-full p-2 w-20 dark:border-white hover:cursor-pointer text-center' href={live} target='_blank' > Live</a>
          <a className='border border-black rounded-full p-2 w-20 dark:border-white hover:cursor-pointer text-center' href={github} target='_blank'>Github</a>
        </div>
      </div>
    </div >
  )
}

export default ProjectItem
