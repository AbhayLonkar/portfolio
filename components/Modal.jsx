import React from 'react'
import { BiInfoCircle } from 'react-icons/bi'

const Modal = ({ togglePopOver }) => {
  return (
    <div className='bg-slate-950 opacity-90 absolute -top-3 h-full w-full  flex justify-center items-center'>
      <div className='p-3 bg-black text-white rounded-2xl w-80 flex flex-col items-center gap-2 mt-10'>
        <h1 className='flex gap-2 text-xl items-center'> <BiInfoCircle size={20} /> Info</h1>
        <p>This form will not work but if you want to contact me you can use above options to reach me or mail me at my email.</p>
        <a className='self-start text-blue-600 hover:cursor-pointer hover:underline underline-offset-4' href='mailto:abhaylonkar9@gmail.com'>By clicking here</a>
        <button onClick={togglePopOver} className='p-2 bg-blue-400 w-30 rounded-full hover:cursor-pointer shadow shadow-blue-400'>Close</button>
      </div>
    </div>
  )
}

export default Modal
