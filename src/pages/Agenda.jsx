import React from 'react'
import Navbar from '../components/Navbar'
import ProximosEventos from '../components/ProximosEventos'

const Agenda = () => {
  return (
    <div>
        <Navbar/>

        <div className='mx-auto w-[90%] md:w-[60%] pt-20'>
          <ProximosEventos/>
        </div>


    </div>
  )
}

export default Agenda