import React from 'react'
import Logo from '../assets/logo.png'

const Hero = () => {
  return (
    <div className='flex flex-col justify-center items-center mx-auto h-[100vh] bg-[#ff6f6260]'>
        <img className='md:h-[25%] md:w-[40%] sm:h-[20%] min-w-[100px] w-[60%] flex mx-auto' src={Logo} alt="" />
        <h1 className='font-black text-3xl pt-12'>EN CONSTRUCCIÓN</h1>
    </div>
  )
}

export default Hero