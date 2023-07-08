// import React from 'react'
import React from 'react';
import rev from '../assets/images/image5.jpg'
import facebook from '../assets/images/facebook.png'
import weALT from '../assets/images/IMG_1922.png'
import '../pages/pages.css'
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../themeSlice';
import { Link } from 'react-router-dom';


const Footer = () => {
  const dispatch = useDispatch()

  return (
    <>
    <div id='footer' className="w-[100vw] h-[500px] text-white flex sm:justify-center" onMouseOver={() => dispatch(setTheme('#ffffff'))}>
        <div className='sm:w-[75vw] w-[80vw] flex justify-between p-10'>
            <div className="flex sm:justify-start h-[20em] flex-col">
                <img className='w-[400px] rounded' src={rev} alt='Rev. Dr. Yakubu Pam' />
                <p className='pb-5'>Rev. Yakubu Pam, CEO/President of YACPIF</p>
                <a href="https://web.facebook.com/YoungAmbassadorsForPeace?_rdc=1&_rdr" target='_blank' rel="noreferrer"> <img className='w-[40px]' src={facebook} alt='facebook'/></a> 
                <div className=' pt-2 grid grid-cols-3 gap-1 items-center'>
                
                    <Link to={'/blog'} target='_blank' rel="noreferrer">Blog</Link>
                </div>  
            </div>   
        </div>
     </div>

     <div className=' border-black w-[100vw] bg-[#B2C58B] flex justify-between h-[70px]' onMouseOver={() => dispatch(setTheme('#37392E'))}>
        <div className='w-[10vh]'></div> 
        <div className='flex items-center'>
            <div className='flex w-[80px] h-[]'>
                <img loading='lazy' src={weALT} alt="weALT logo"/>
            </div>
        </div>           
     </div>
     </>
  )
}

export default Footer