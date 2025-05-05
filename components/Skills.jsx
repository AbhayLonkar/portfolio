import React from 'react'

const Skills = () => {
  return (
    <div className='my-15 flex justify-center items-center flex-col'>
      <h1 className={'text-center text-4xl text-black mb-2 font-bold dark:text-white'}>My Skills & Tools</h1>
      <div className='grid md:grid-cols-12 grid-cols-6 mt-5 gap-2 '>
        <img src="/icons/C.svg" alt="C Programming" />
        <img src="/icons/CPP.svg" alt="C++" />
        <img src="/icons/java.svg" alt="Java" />
        <img src="/icons/html.svg" alt="Html" />
        <img src="/icons/css.svg" alt="Css" />
        <img src="/icons/js.svg" alt="js" />
        <img src="/icons/py.svg" alt="python" />
        <img src="/icons/kt.svg" alt="kotlin" />
        <img src="/icons/ts.svg" alt="typescript" />
        <img src="/icons/sql.svg" alt="sql" />
        <img src="/icons/md.svg" alt="mongodb" />
        <img src="/icons/php.svg" alt="php" />
      </div>
      <div className='grid grid-cols-6 mt-5 gap-2 '>
        <img src="/icons/react.svg" alt="React JS" />
        <img src="/icons/nodejs.svg" alt="Node JS" />
        <img src="/icons/android.svg" alt="Android Studio" />
        <img src="/icons/tailwind.svg" alt="TailwindCSS" />
        <img src="/icons/vite.svg" alt="VITE" />
        <img src="/icons/npm.svg" alt="NPM" />
      </div>
    </div>
  )
}

export default Skills;
