import React from 'react'
import HeroLogo from '../assets/logo-hero.png'

const Hero = () => {
  return (
    <div className='flex flex-col justify-center items-center mx-auto h-[100vh]'>
        <img className='md:h-[40%] h-[20%] w-[60%] flex mx-auto' src={HeroLogo} alt="" />
        <h1 className='font-black text-3xl'>EN CONSTRUCCIÓN</h1>
    </div>
  )
}

export default Hero