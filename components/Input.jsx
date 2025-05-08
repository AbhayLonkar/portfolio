import React from 'react'

const Input = ({ type, name, placeholder }) => {
  return (
    <input type={type} name={name} placeholder={placeholder} required
      className='rounded-full p-4 bg-slate-800 text-white placeholder:text-white w-80 outline-0' />
  )
}

export default Input
