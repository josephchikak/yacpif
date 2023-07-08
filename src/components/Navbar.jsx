import React from 'react'
import '../pages/pages.css'
import {Link, animateScroll as scroll } from "react-scroll";
import { Link as LinkTo } from 'react-router-dom';


const Navbar = () => {
  return (
    <div id='navbar' className='h-[5vh] w-[100vw] flex justify-center  fixed z-10'>
        <div>
            <nav className='flex w-[70vw] sm:w-[50vw] h-full justify-between items-center cursor-pointer'>
              
              <Link to={'home'} className='navs focus:border-b-2 hover:border-b-2 border-black' >            
                 Home 
              </Link>
              
              <Link  to={'about'}
                spy={true}
                smooth={true}
                duration={500} className=' focus:border-b-2 navs  hover:border-b-2 border-black cursor-pointer' >Who we are 
              </Link> 

              <LinkTo to= {'/blog'}
                spy={true}
                smooth={true} 
                // offset={-70}
                duration={500} className=' navs hover:border-b-2 border-black cursor-pointer'> Articles 
              </LinkTo>         
            </nav>
        </div>
    </div>
  )
}

export default Navbar