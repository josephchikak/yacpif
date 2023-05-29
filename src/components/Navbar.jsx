// import React from 'react'
// import { Link } from 'react-router-dom'
import '../pages/pages.css'
import {Link, animateScroll as scroll } from "react-scroll";
// import { HashLink } from 'react-router-hash-link'


const Navbar = () => {
  return (
    <div id='navbar' className='h-[5vh] w-[100vw] flex justify-center  fixed z-10'>
        <div>
            <nav className='flex w-[70vw] sm:w-[50vw] h-full justify-between items-center'>
              <Link activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                // offset={-70}
                duration={500}  className='navs hover:border-b-2 border-black cursor-pointer'> Home 
              </Link> 

              <Link  to="about"
                spy={true}
                smooth={true}
                // offset={-70}
                duration={500} className=' focus:border-b-2 navs  hover:border-b-2 border-black cursor-pointer' >Who we are 
              </Link> 

              <Link to="articles"
                spy={true}
                smooth={true}
                // offset={-70}
                duration={500} className=' navs hover:border-b-2 border-black cursor-pointer'> Articles 
              </Link>         
            </nav>
        </div>
    </div>
  )
}

export default Navbar