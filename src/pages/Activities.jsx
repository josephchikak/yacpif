import React from 'react';
import { animated, useInView } from '@react-spring/web'
import {Button} from '@chakra-ui/react'
import {ArrowForwardIcon} from '@chakra-ui/icons'
import './pages.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setTheme, setScale } from '../themeSlice';
import { Link as LinkTo } from 'react-router-dom';

const Activities = () => {
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();

  useEffect(() =>{
   const project2 = document.getElementById('projectDiv')
   const project3 = document.getElementById('projectDiv2')
   window.innerWidth < 700 ? project2.style.transform = null : null
   window.innerWidth < 700 ? project3.style.transform = null : null

  })

  const dispatch = useDispatch()


  return (
    <div className='flex justify-center w-[100vw] sm:h-[100vh] lg:pt-10 ' onMouseOver={() => dispatch(setTheme('#000000'))} id='activities'>
        <div className='flex flex-col w-[100vw] h-full lg:grid grid-cols-1 sm:grid-rows-2 grid-flow-col lg:w-[70vw] lg:h-full text-black' >
            <animated.div ref={ref} style={{opacity: inView ? 1  : 0}} className=' project w-[100vw] sm:w-full h-full bg-[#B2C58B]'>
                <div className='flex flex-col justify-center  h-full p-5'>
                    <h3 className='text-2xl mainText pb-2'>
                    Peace Banners
                    </h3>
                    <p className='lg:text-clip'>
                    YACPIF has acquired a Social Center in Jos. The Social Center is located in a “border area” between a Christian and a Muslim communities. The purpose of the Social Center is to provide a space where Muslim and Christian youth come together and build friendships.
                    </p>
                    <LinkTo to= {'/blog'} target="_blank" rel="noopener noreferrer">
                        <Button 
                            rightIcon={<ArrowForwardIcon />} 
                            colorScheme='black' 
                            variant='outline'
                            width='200px'
                            className='justify-self-end mt-3 cursor-none'
                            // onMouseOver={() => dispatch(setScale(2))}
                            >
                            Read more
                        </Button>
                        
                    </LinkTo> 

                </div>
               
            </animated.div>

            <div className='lg:w-[25vw] lg:h-[25vh] bg-slate-100'>   
                </div>
                    <animated.div id='projectDiv' ref={ref2} style={{transform: inView2 ? 'translateX(0px) ' : 'translateY(250px)'}} className='project w-full sm:h-[300px] hover:h-full bg-slate-100'>
                    <div  className='flex flex-col justify-center w-100vw sm:w-[500px] h-full p-5'>
                            <h3 className='text-2xl mainText pb-2'>
                            Local Peace Football Programs
                            </h3>
                            <p>
                            After the success of the Peace Cup football program in Jos North and Jos South that brought Christian and Muslim youths together <br /> the Young Ambassadors suggested that Peace Football programs be held in their local communities.
                            </p>
                            <LinkTo to= {'/blog'} target="_blank" rel="noopener noreferrer">
                                <Button 
                                    rightIcon={<ArrowForwardIcon />} 
                                    colorScheme='black' 
                                    variant='outline'
                                    width='200px'
                                    className='justify-self-end mt-3'>
                                    Read more
                                </Button>
                            </LinkTo>
                        </div>
                </animated.div>

            <animated.div id='projectDiv2' ref={ref3} style={{transform: inView3 ? 'translateX(0px) ' : 'translateY(-300px)'}} className='pb-5 z-0 project lg:w-[500px] h-full lg:h-[400px] bg-[#B2C58B] lg:hover:h-full hover:bg-slate-100] '>
                 <div className='flex flex-col justify-center w-[100vw] sm:w-[500px] h-full p-5'>
                        <h3 className='text-2xl mainText pb-2'>  
                        Peace Cup 2010
                        </h3>
                        <p className='text-clip'>
                        YACPIF hosted Peace Cup 2010 on 21 December 2010 at Bukuru Mini-Stadium. The winning teams from the Jos North and Jos South Peace Cup Camps (posted about here) played in a tournament football match. A peace rally accompanied the football match.
                        </p>
                        <LinkTo to= {'/blog'} target="_blank" rel="noopener noreferrer">
                            <Button 
                                rightIcon={<ArrowForwardIcon />} 
                                colorScheme='black' 
                                variant='outline'
                                width='200px'
                                className='justify-self-end mt-3 mb-3'>
                                Read more
                            </Button>
                        </LinkTo>
                    </div>
            </animated.div>
             </div>
    </div>
  
  )
}

export default Activities