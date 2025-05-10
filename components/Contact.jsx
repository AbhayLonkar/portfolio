import ContactCard from './ContactCard'
import { FaLinkedin } from 'react-icons/fa6'
import { FaGithub } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import FeedbackForm from './FeedbackForm'

const Contact = () => {
    return (
        <section id='contact' className={'mt-10 md:h-full  font-mono flex flex-col items-centers justify-center  dark:text-white text-gray-600 pb-16'}>
            <h1 className={'text-center text-4xl text-black mb-1 font-bold dark:text-white'}>
                Get in <span className='text-blue-400'>Touch</span>
            </h1>
            <h3 className={'text-center text-lg text-gray-500 dark:text-gray-200 '}>Have feedback or need some help?</h3>
            <div className='grid md:grid-cols-3 grid-cols-2 md:mt-10 mt-20 self-center justify-center gap-2'>
                <ContactCard icon={<SiGmail size={40} className='text-red-600 ' />} link={"mailto:abhaylonkar9@gmail.com"} color={'red'} />
                <ContactCard icon={<FaLinkedin size={40} className='text-blue-600' />} link={"https://www.linkedin.com/in/abhaylonkar"} color={'blue'} />
                <ContactCard icon={<FaGithub size={40} className='text-black dark:text-white' />} link={"https://github.com/AbhayLonkar"} color={'red'} />
            </div>
            <FeedbackForm />
        </section>
    )
}
export default Contact
