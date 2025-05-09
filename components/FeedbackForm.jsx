import React from 'react'
import Input from './Input'
import { BiSend } from 'react-icons/bi'

const FeedbackForm = () => {
  return (
    <div className='self-center mt-10  md:p-10 p-5 md:w-[90%] w-[98%] rounded-lg bg-gradient-to-br from-blue-600 to-blue-400 shadow-xl items-center justify-center flex'>
      <form name='form1'>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
          <Input type={'text'} name={'username'} placeholder={'Enter your Name'} />
          <Input type="email" name='email' placeholder='Enter your Email' />
          <Input type="phone" name='number' placeholder='Enter your Number' />
        </div>
        <textarea name="msg" id="msg" rows={10} placeholder='Enter your message here' className='p-3 w-80 bg-slate-800 mt-5 rounded-xl md:w-full placeholder:text-white text-white outline-0' ></textarea>
        <button className='flex items-center gap-2 p-3 text-white shadow-2xl  rounded-full bg-gradient-to-r from-cyan-500 to-blue-600'>
          <BiSend size={20} />
          Send Message
        </button>
      </form>
    </div>
  )
}

export default FeedbackForm
