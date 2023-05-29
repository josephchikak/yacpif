// import React from 'react'
import rev from '../assets/images/image5.jpg'
import facebook from '../assets/images/facebook.png'
import weALT from '../assets/images/IMG_1922.png'
import '../pages/pages.css'

const Footer = () => {
  return (
    <>
    <div id='board' className="w-[100vw] h-[50vh] flex sm:justify-center">
        <div className='w-[70vw]  flex justify-between p-10'>
        <div className="flex sm:justify-start flex-col">
            {/* <h1 className='pb-5'>YACPIF Board of Trustees</h1> */}
            <img className='w-[400px] rounded' src={rev} alt='Rev. Dr. Yakubu Pam' />
            <p className='pb-5'>Rev. Yakubu Pam, CEO/President of YACPIF</p>
            <a href="https://web.facebook.com/YoungAmbassadorsForPeace?_rdc=1&_rdr" target='_blank' rel="noreferrer"> <img className='w-[40px]' src={facebook} alt='facebook'/></a> 
            <div className=' pt-2 grid grid-cols-3 gap-1 items-center'>
                {/* <a href="">Home</a> */}
                {/* <a href="">About</a> */}
                <a href="https://yacpif.wordpress.com/" target='_blank' rel="noreferrer">Blog</a>
        </div>  
        </div>
          
     </div>
    
     </div>
     <div className=' border-black w-[100vw] bg-[#B2C58B] flex justify-between h-[9vh]'>
        {/* <div className='w-[100vw] flex justify-between '> */}
        <div className='w-[10vh]'></div>
           
        <div className='flex items-center'>
            {/* <p>Developed by</p> */}
            <div className='weALT flex w-[80px] h-[]'>
                <img src={weALT} alt="weALT logo"/>
            </div>
        </div>  

        {/* </div> */}
     
     </div>
     </>
  )
}

export default Footer