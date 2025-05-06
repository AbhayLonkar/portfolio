import React from 'react'

const Education = () => {
  return (
    <div className='my-10 flex flex-col gap-3 justify-center items-center border-2 md:w-max w-[90%] self-center md:p-5 py-2 rounded-xl  dark:border-blue-400'>
      <h1 className={'text-center text-4xl text-black mb-2 font-bold dark:text-white'}>Education</h1>
      <h3 className={'text-center text-lg text-gray-500 dark:text-gray-200'}>My Personal Journey</h3>

      <div className='flex flex-col relative items-center h-max gap-1 max-w-3xl px-5  text-sm md:text-lg '>

        <div className='h-full w-0.5 bg-blue-400 absolute '></div>

        <div className='grid grid-cols-3'>
          <div className='w-full'>
            <h3 className='text-black dark:text-white font-bold'>Bachelor of Computer Application</h3>
            <h3>RTMNU - University Nagpur</h3>
            <span>
              2022 - 2025
            </span>
          </div>

          <div className='flex justify-center'>
            <div className='size-4 bg-blue-400 rounded-full'></div>
          </div>
        </div>

        <div className='grid grid-cols-3'>
          <div></div>
          <div className='flex justify-center'>
            <div className='size-4 bg-blue-400 rounded-full'></div>
          </div>
          <div>
            <h3 className='text-black dark:text-white font-bold'>Higher Secondary Board</h3>
            <h3>Hislop College - Nagpur</h3>
            <span>
              2021 - 2022
            </span>
          </div>
        </div>

        <div className='grid grid-cols-3'>
          <div>
            <h3 className='text-black dark:text-white font-bold'>Higher Primary Board</h3>
            <h3>Blue Diamong English High School - Nagpur</h3>
            <span>
              2021 - 2022
            </span>
          </div>
          <div className='flex justify-center'>
            <div className='size-4 bg-blue-400 rounded-full'></div>
          </div>
        </div>



      </div>
    </div>
  )
}

export default Education
