// import React from 'react'
import { useSpring, animated, useScroll, useInView } from '@react-spring/web'

import './pages.css'
import { Button, } from '@chakra-ui/react'
import {ArrowForwardIcon} from '@chakra-ui/icons'
import computer from '../assets/images/computer.jpg'
import dialogue from '../assets/images/dialogue.jpg'
import fasting from '../assets/images/fasting.webp'
import { Element } from 'react-scroll/modules'

const Projects = () => {

    const [ref, inView] = useInView();
    const [ref2, inView2] = useInView();
    const [ref3, inView3] = useInView();

  return (
   <Element name='articles'>
        <div id='about' className='lg:w-[100vw] overflow-auto sm:h-[80vh] h-full lg:flex justify-center pt-10 pb-10'>
        <div className='sm:flex h-full w-[100vw] sm:w-[70vw]  pt-5 sm:flex-row grid grid-rows-3 grid-cols-1 '>
                {/* <div id='aboutImg' className=' w-full flex justify-start flex-col pt-5'> 
                <p> Projects</p>
        </div> */}
         
        <animated.div  ref={ref} style={{opacity: inView ? 1: 0, transition:'1s ease-in-out', animationDelay:'0.5s'}} id='project1' className='project sm:w-[500px] h-full sm:h-[35vh] p-5 rounded-md ' > 
              
              <img src={fasting} alt="" className='rounded-md'/>
              <div className='bg-black w-full h-full flex flex-col items-start p-3 sm:pb-10 rounded-md bg-opacity-5'>
              <h3 className='border-[#B2C58B] border-b-2 uppercase text-xl pb-4'>Muslim and Christian Youth Break Ramadan Fast Together in Jos</h3>
              <div className='flex flex-col justify-between h-[200px] pt-2'>
                  <p>On 2 August 2012, around 80 Muslim and Christian youth gathered at the YACPIF office to break the Ramadan fast together.</p>
                 <a href="https://yacpif.wordpress.com/2012/08/03/muslim-and-christian-youth-break-ramadan-fast-together-in-jos/" target="_blank" rel="noopener noreferrer">
                    <Button 
                    rightIcon={<ArrowForwardIcon />} 
                    colorScheme='black' 
                    variant='outline'
                    width='200px'
                    className='btnn justify-self-end sm:mt-3'>
                    Continue reading
                    </Button>
                 </a> 
              </div>
              </div> 
          </animated.div>


            <animated.div  ref={ref2} style={{opacity: inView2 ? 1: 0, transition:'1s ease-in-out', delay:'1s'}} id='project2' className='project  sm:w-[500px] h-[40vh] p-5 rounded-md ' > 
                <img src={computer} alt="" className='rounded-md'/>
                <div className='bg-black w-full h-[400px] sm:h-full flex flex-col items-start p-3 pb-10 rounded-md bg-opacity-5 '>
                <h3 className='border-[#B2C58B] border-b-2 uppercase text-xl pb-4'>YACPIF Computer Class</h3>
                <div className='flex flex-col justify-between h-[400px] sm:h-full pt-2'>
                    <p> YACPIF asked their Peace Ambassadors, youth working for peace in their communities, what activities they thought that YACPIF could sponsor to further peace. They frequently replied, “Empowerment for the youth.” What type of empowerment, YACPIF asked. Since the YACPIF office has a small computer lab, the youth suggested computer classes.</p>
                <a href="https://yacpif.wordpress.com/2012/03/14/yacpif-computer-class/" target="_blank" rel="noopener noreferrer">
                   <Button 
                    rightIcon={<ArrowForwardIcon />} 
                    colorScheme='black' 
                    variant='outline'
                    width='200px'
                    className='btnn justify-self-end'>
                    Continue reading
                    </Button>
                </a>
                   
                </div>
                </div>    
           </animated.div>

            
            <animated.div  ref={ref3} style={{opacity: inView3 ? 1: 0, transition:'1s ease-in-out', animationDelay:'1.5s'}} id='project3' className='project  sm:w-[500px] h-full sm:h-[40vh] p-5 rounded-md' > 
              
                <img src={dialogue} alt="" className='rounded-md'/>
                <div className='bg-black w-full h-[400px] sm:h-full flex flex-col items-start p-3 pb-10 rounded-md bg-opacity-5'>
                <h3 className='border-[#B2C58B] border-b-2  uppercase text-xl pb-4'>Forum for Dialogue on Peacebuilding and Conflict Mediation in Jos, Plateau State</h3>
                <div className='flex flex-col justify-between h-full pt-2'>
                    <p> The Canadian High Commission, in cooperation with the Centre for Humanitarian Dialogue and YACPIF, sponsored a Forum for Dialogue on Peacebuilding and Conflict Mediation in Jos, Plateau State on Wednesday, 29 February 2012. </p>
                   <a href="https://yacpif.wordpress.com/2012/03/02/forum-for-dialogue-on-peacebuilding-and-conflict-mediation-in-jos-plateau-state/" target="_blank" rel="noopener noreferrer">
                        <Button 
                        rightIcon={<ArrowForwardIcon />} 
                        colorScheme='black' 
                        variant='outline'
                        width='200px'
                        className='btnn justify-self-end sm:mt-3'>
                        Continue reading
                        </Button>
                   </a>     
                </div>
                </div> 
            </animated.div>


        </div>
      
    </div>


   </Element>
       
  )
}

export default Projects