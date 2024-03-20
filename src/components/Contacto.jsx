import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";

const Contacto = () => {
  return (
    <div className='w-full py-[6rem] px-4'>
        <div className='max-w-[1240px] shadow-lg shadow-orange-500/50 bg-orange-600 mx-auto flex flex-col py-8 px-4 md:mx-14 lg:rounded-[2rem] rounded-lg justify-center items-center text-white'>
            <h1 className='md:text-4xl text-2xl font-bold my-6 text-center'>Contáctanos</h1>
            <div className='flex shadow-lg shadow-blue-500/50 bg-white hover:scale-105 duration-300 hover:bg-gray rounded-[2rem] my-8 m-4 px-6 py-2 text-[#000300]'>
                <div className='flex justify-center items-center px-2'>
                    <FaPhoneAlt/>
                </div>
                <a href="https://web.whatsapp.com/send?phone=56949453696&text=%C2%A1Hola!%20Deseo%20hacer%20una%20reserva%20para%20mi%20Caba%C3%B1a!"><p className='text-bold pl-2'>+56 9 4945 3696</p></a>
                
            </div>
            <p className='text-[0.8rem] text-center'>Nuestro horario de atención es de Lunes a Viernes de 09:00 a 19:00 horas</p>
        </div>
    </div>
  )
}

export default Contacto