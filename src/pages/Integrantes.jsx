import React from 'react'
import IntegranteUno from '../assets/Integrantes/carlos.jpg'
import Navbar from '../components/Navbar'

const Integrantes = () => {
  return (
<div>
    <Navbar/>
  <div className='md:grid flex-col flex gap-16 md:grid-cols-4 md:px-40 mt-32 my-20 items-center sm:grid-cols-4 mx-auto w-full justify-center'>
      
      <div className='flex flex-col items-center mx-auto w-[250px] h-[250px] border-2 rounded-xl bg-orange-700 hover:border-dotted hover:border-2 hover:border-orange-600'>
        <img className='rounded-xl' src={IntegranteUno} alt="" />
        <div >
          <h1 className='text-xl font-bold  hover:scale-105 duration-300'>Carlos Quezada</h1>
        </div>
      </div>

      <div className='flex flex-col items-center mx-auto w-[250px] h-[250px] border-2 rounded-xl bg-orange-700 hover:border-dotted hover:border-2 hover:border-orange-600'>
        <img className='rounded-xl' src={IntegranteUno} alt="" />
        <div >
          <h1 className='text-xl font-bold  hover:scale-105 duration-300'>Carlos Quezada</h1>
        </div>
      </div>




    </div>


</div>
  )
}

export default Integrantes