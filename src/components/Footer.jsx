import React from 'react'
import { Link } from 'react-router-dom';
import { FaInstagram,FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full mx-auto mt-12 h-full bg-[#00030060]'>
        
        <div className='font-bold text-xl p-4 text-center flex w-full mx-auto justify-center gap-8' >
            <Link to="https://www.instagram.com/jallas_coquimbo/"><FaInstagram size={50} className='hover:scale-105 duration-300 hover:shadow-lg hover:shadow-orange-500/50' /></Link>
            <Link to="https://web.facebook.com/profile.php?id=61555941638472"><FaFacebookSquare size={50} className='hover:scale-105 duration-300 hover:shadow-lg hover:shadow-orange-500/50'/></Link>
        </div>

        <h1 className='font-bold text-xl p-4 text-center'>Jalla's Coquimbo © 2024</h1>



    </div>
  )
}

export default Footer