
import { IoMdInformationCircleOutline } from 'react-icons/io'

const ContactCard = ({ icon, link, color }) => {
  return (
    <div className={`border-2 rounded-xl shadow-xl w-35 h-25 flex flex-col items-center justify-between hover:border-${color}-400 hover:shadow-${color}-400 hover:shadow-md cursor-pointer transition-all duration-300 dark:border-gray-500 border-gray-400`} onClick={() => window.open(link)}>
      <div className='flex flex-col items-center justify-center mt-4'>
        {icon}
      </div>
      <a className='font-bold mt-2 flex justify-between items-center gap-1 p-1 text-sm md:text-md' href={link} target='_blank'>
        <IoMdInformationCircleOutline /> Abhay Lonkar
      </a>
    </div>
  )
}

export default ContactCard
