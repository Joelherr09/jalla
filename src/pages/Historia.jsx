import React from 'react'
import Navbar from '../components/Navbar'
import Logo from '../assets/logo.png'
import Footer from '../components/Footer'

const Historia = () => {
  return (
<div>
<Navbar/>

<div className='flex flex-col justify-center items-center static'>



<p className='font-black text-3xl mt-32'>Historia</p>
<p className='font-black'>20 de Enero, 2024 || 19 de marzo</p>
<div className='flex mx-auto md:w-[70%] w-[90%] mb-16 mt-4 bg-[#00030060] shadow-lg shadow-orange-500/50'>
  <p className='text-white opacity-1 h-full py-8 px-8'>Seguimos avanzando, a paso lento pero  firmes y seguros..
Jalla's nace el día 20 de enero del 2024 en la ciudad de Coquimbo, grupo  conformado por ex integrantes de agrupaciones de floclor andino de dicha ciudad,  los cuales al ver que compartían ideas, y objetivos similares, deciden crear éste hermoso proyecto musical llamado Jalla's, con el solo afán de crear, difundir y compartir con los amantes de la música de nuestras raíces ...... 
A la palabra jalla se le agrega la letra "S" al final como distintivo, es asi qué Jalla's  deriva  de  "Jalla Jalla" que en lengua quechua significa vida y salud, la cual se usaba como saludo y despedida. con el paso de los años esta se transforma en el tradicional jallalla..!
Gracias a todos nuestros amigos por el apoyo y el cariño, un abrazo .!</p>
</div>
<img className='py-2 max-h-[150px] hover:scale-105 duration-300' src={Logo} alt="" />



<Footer/>

</div>

</div>
  )
}

export default Historia