import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='flex items-center z-50 fixed top-0 justify-between md:justify-start px-8 h-24 w-full shadow-lg shadow-orange-500/50 bg-[#da7533] mx-auto text-white'>
        <div className='md:flex'>        
            <Link to="/"><img className='py-2 max-h-[100px] hover:scale-105 duration-300' src={Logo} alt="" /></Link>
        </div>
        <ul className='hidden md:flex uppercase'>
            <a className='p-4 hover:text-gray-800  hover:scale-105 duration-300 ' href="/">
                <Link to="/agenda"><li >Agenda</li></Link>
            </a>
            <a href="/">
                <Link to="/historia"><li className='p-4 hover:text-gray-800 hover:scale-105 duration-300'>Historia</li></Link>
            </a>
            <a href="/">
                <li className='p-4 hover:text-gray-800 hover:scale-105 duration-300'>Integrantes</li>
            </a>
            <a href="/">
                <li className='p-4 hover:text-gray-800 hover:scale-105 duration-300'>Prensa</li>
            </a>
            <a href="/">
                <li className='p-4 hover:text-gray-800 hover:scale-105 duration-300'>Fotos</li>
            </a>
            
        </ul>


        <div onClick={handleNav} className=' md:hidden block'>
            {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            
        </div>


        <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r min-w-[300px] border-r-gray-900 bg-[#da7533] ease-in-out duration-500' : 'fixed left-[-100%]'}>

            <div className='w-full h-24 flex object-contain'>        
                <img className='h-full hover:scale-105 duration-300' src={Logo} alt="" />
            </div>
                <ul className='p-4 uppercase' >
                    <a className='p-4 hover:text-gray-800  hover:scale-105 duration-300 '  href="/" onClick={handleNav}>
                        <li className='p-4 border-b border-gray-600'>Agenda</li>
                    </a>
                    <a className='p-4 hover:text-gray-800  hover:scale-105 duration-300 ' href="/" onClick={handleNav}>
                        <li className='p-4 border-b border-gray-600'>Historia</li>
                    </a>
                    <a className='p-4 hover:text-gray-800  hover:scale-105 duration-300 ' href="/" onClick={handleNav}>
                        <li className='p-4 border-b border-gray-600'>Integrantes</li>
                    </a>
                    <a className='p-4 hover:text-gray-800  hover:scale-105 duration-300 ' href="/" onClick={handleNav}>
                        <li className='p-4 border-b border-gray-600'>Prensa</li>
                    </a>
                    <a className='p-4 hover:text-gray-800  hover:scale-105 duration-300 ' href="/" onClick={handleNav}>
                        <li className='p-4'>Fotos</li>
                    </a>
                </ul>
        </div>
    </div>
  )
}

export default Navbar