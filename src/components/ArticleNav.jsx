import React from 'react'
import '../pages/pages.css'
import {Link, animateScroll as scroll } from "react-scroll";
import { Link as LinkTo } from 'react-router-dom';


const ArticleNav = () => {
  return (
    <div id='navbar' className='h-[5vh] w-[100vw] flex justify-center  fixed z-10'>
        <div>
            <nav className='flex w-[70vw] sm:w-[50vw] h-full justify-center items-center cursor-pointer'>    
              <LinkTo to={'/'} className='navs hover:border-b-2 border-black' >
                    Home 
              </LinkTo>
            </nav>
        </div>
    </div>
  )
}

export default ArticleNav