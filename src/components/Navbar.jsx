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
    <div className='flex items-center z-50 fixed top-0 justify-between md:justify-start px-8 h-20 md:h-[80px] w-full shadow-lg shadow-orange-500/50 bg-[#da7533] mx-auto text-white'>

        <div className='flex w-[90%] mx-auto items-center justify-between'>

            <div className='md:flex'>        
                <Link to="/">
                    <img className='py-2 max-h-[80px] md:max-h-[80px] hover:scale-105 duration-300' src={Logo} alt="" />
                </Link>
            </div>
            <ul className='hidden md:flex uppercase gap-4'>
                <Link to="/agenda" href="/">
                    <li  className='p-4 hover:text-gray-800 text-xl font-bold hover:scale-105 duration-300 '>Agenda</li>
                </Link>
                <Link to="/historia">
                    <li className='p-4 hover:text-gray-800 hover:scale-105 duration-300 text-xl font-bold'>Historia</li>
                </Link>
                <Link to="/integrantes">
                    <li className='p-4 hover:text-gray-800 hover:scale-105 duration-300 text-xl font-bold'>Integrantes</li>
                </Link>
                
            </ul>

        </div>

        <div onClick={handleNav} className=' md:hidden block'>
            {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            
        </div>


        <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r min-w-[300px] border-r-gray-900 bg-[#da7533] ease-in-out duration-500' : 'fixed left-[-100%]'}>

            <div className='w-full h-24 flex object-contain'>        
                <Link to="/"><img className='h-[90%] pt-2 pl-8 hover:scale-105 duration-300' src={Logo} alt="" /></Link>
            </div>
                <ul className='p-4 uppercase' >
                    <Link to="/agenda" className='p-4 hover:text-gray-800  hover:scale-105 duration-300 '   onClick={handleNav}>
                        <li className='p-4 border-b border-gray-600'>Agenda</li>
                    </Link>
                    <Link to="/historia" className='p-4 hover:text-gray-800  hover:scale-105 duration-300 '  onClick={handleNav}>
                        <li className='p-4 border-b border-gray-600'>Historia</li>
                    </Link>
                    <Link to="/integrantes" className='p-4 hover:text-gray-800  hover:scale-105 duration-300 ' href="/" onClick={handleNav}>
                        <li className='p-4 border-b border-gray-600'>Integrantes</li>
                    </Link>
                </ul>
        </div>
    </div>
  )
}

export default Navbar