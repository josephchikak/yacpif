import React from 'react';
import { useSpring, animated, useScroll, useInView } from '@react-spring/web'
import { useEffect } from 'react';
import {ThemeContext, themes} from '../Cursor-theme'
import { Element } from "react-scroll/modules"
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../themeSlice';


const About = () => {

    const mouseOverEventB = () =>{
        // cursorEnglarged.current = true
        cursorVisible.current = true;
        toggleCursorVisibility();
    }

    const [ref, inView] = useInView();

    const theme = useSelector((state) => state.theme.theme)
    const dispatch = useDispatch()

  return (
    <Element name="about">
        <div  id='about' className='w-[100vw] h-[70vh] sm:h-[30em] flex justify-center items-center' onMouseOver={() => dispatch(setTheme('#eae8e0'))}  >
        <animated.div ref={ref} style={{opacity: inView ? 1: 0, transition:'1s ease-in-out'}} className='lg:w-[70vw] w-[100vw] p-5 '>
            <h1 className='text-2xl pb-5 mainText'>About</h1>
            <p className='text-l'>
            Young Ambassadors for Community Peace and Interfaith Foundation (YACPIF) is an NGO based in Jos, Nigeria whose mission is to prevent conflict and achieve and sustain peace through a community approach. <br/> YACPIF utilizes interesting and engaging activities such as rallies and sports to bring rival armed groups together to create and build lasting relationships. YACPIF registers young people between the ages of 14 to 40 who will stand for peace in a conflicted community as ambassadors of peace.
            </p>
        </animated.div>
    </div>

    </Element> 
    
  )
}

export default About