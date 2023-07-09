import React from 'react'
import { useSpring, animated, useScroll, useInView } from '@react-spring/web'
import { Button, } from '@chakra-ui/react'
import {ArrowForwardIcon} from '@chakra-ui/icons'
import { useDispatch, useSelector } from 'react-redux';
import fasting from './assets/fasting.webp'



const PostCard = ({post, handleClick}) => {
   

    const [ref, inView] = useInView();

  return (
    <>
    <animated.div  ref={ref} style={{opacity: inView ? 1: 0, transition:'0.5s ease-in-out',}} className='w-[100%] h-[160px] sm:w-[1000px] sm:h-[250px] bg-[#B2C58B] text-black flex flex-row justify-between'>

    <animated.div  id='project1' className='project w-[75%] h-[160px] sm:w-[800px] sm:h-[250px] p-5  bg-black hover:translate-x-5'> 
        <div className='flex text-white h-[70px]'>
          
              <div className='bg-black w-[90%] sm:w-full h-[100px] flex flex-col items-start sm:pb-10 sm:pt-2 '>
              <h3 className='border-[#B2C58B] m:border-b-2 uppercase sm:pb-4 sm:text-[2rem] '>{post.value.title}</h3>
              <div className='flex pt-2 h-[80%] sm:w-[500px] '>
                  <p className='truncate sm:visible invisible'>{post.value.article}</p>
              </div>
              </div> 
        </div>        
     </animated.div>

     <div className='w-[350px] sm:w-[250px] flex justify-end relative bg-[#B2C58B]  hover:bg-[#000000] hover:text-white transition duration-500'  onClick={handleClick} >
        <div className='flex sm:w-[100px] flex-col justify-end '>
            <h2 className='pr-1 text-sm sm:visible invisible'>READ MORE</h2>
            <div className='sm:w-[50px] h-[50px] absolute top-12 left-8 sm:left-20 sm:top-20 rounded-full  border-black flex justify-center items-center'>
            <ArrowForwardIcon className='hover:animate-pulse w-[100px] scale-150 '/>
            </div>
        </div>
       
     </div>      

    </animated.div>
     
    </>
  )
}

export default PostCard