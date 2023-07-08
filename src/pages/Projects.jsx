
import React from 'react'
import { useSpring, animated, useScroll, useInView } from '@react-spring/web'
import './pages.css'
import { Button, } from '@chakra-ui/react'
import {ArrowForwardIcon} from '@chakra-ui/icons'
import computer from '../assets/images/computer.jpg'
import dialogue from '../assets/images/dialogue.jpg'
import fasting from '../assets/images/fasting.webp'
import { Element } from 'react-scroll/modules'
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../themeSlice';

const Projects = () => {

    // const [ref, inView] = useInView();
    // const [ref2, inView2] = useInView();
    // const [ref3, inView3] = useInView();

    const dispatch = useDispatch()

  return (
   <Element name='articles'>
     <div id='about' className='lg:w-[100vw] sm:h-[90vh] h-full lg:flex justify-center items-center pt-[50px] overflow-auto' onMouseOver={() => dispatch(setTheme('#eae8e0'))} >
        <div className='sm:flex h-full w-[100vw] sm:w-[70vw]  sm:pt-5 sm:flex-row grid grid-rows-3 grid-cols-1'>
        </div>
    </div>
   </Element>
       
  )
}

export default Projects