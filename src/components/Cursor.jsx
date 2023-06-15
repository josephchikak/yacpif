import React, { useRef } from 'react'
import { useSpring, animated, useScroll, useInView } from '@react-spring/web'
import './cursor.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';


const Cursor = ({}) => {

    const [ref, inView] = useInView();


    useEffect(() => {
        document.addEventListener('mousedown', mouseOverEvent);
        document.addEventListener('mouseup', mouseOutEvent);
        document.addEventListener('mousemove', mouseMoveEvent);
        document.addEventListener('mouseenter', mouseEnterEvent);
        document.addEventListener('mouseleave', mouseLeaveEvent);

        animateDotoutliine()

        return() => {
        document.removeEventListener('mousedown', mouseOverEvent);
        document.removeEventListener('mouseup', mouseOutEvent);
        document.removeEventListener('mousemove', mouseMoveEvent);
        document.removeEventListener('mouseenter', mouseEnterEvent);
        document.removeEventListener('mouseleave', mouseLeaveEvent);

        cancelAnimationFrame(requestRef.current)
        }
    }, [])

    const animateDotoutliine = () =>{
        _x.current += (endX.current - _x.current) / delay
        _y.current += (endY.current - _y.current) / delay

        dotOutline.current.style.top = _y.current + 'px'
        dotOutline.current.style.left = _x.current + 'px'

        requestRef.current = requestAnimationFrame(animateDotoutliine)
    }


    const toggleCursorSize = () =>{
        if (cursorEnglarged.current) {
            dotOutline.current.style.transform = 'translate(-50%, -50%) scale(0.75)'
        }
        else{
            dotOutline.current.style.transform = 'translate(-50%, -50%) scale(1)'
        }
    }

    const mouseOverEvent = () =>{
        cursorEnglarged.current = true
        toggleCursorSize();
    }

    const mouseOutEvent = () => {
        cursorEnglarged.current = false;
        toggleCursorSize();
    }

    const mouseEnterEvent = () => {
        cursorVisible.current = true;
        // toggleCursorVisibility();
    }

    const mouseLeaveEvent = () => {
        cursorEnglarged.current = false;
        // toggleCursorVisibility();
    }



    const dotOutline = useRef(null)

    const mouseMoveEvent = e =>{
        cursorVisible.current = true;
        // toggleCursorVisibility();

        endX.current = e.pageX;
        endY.current = e.pageY;

        dotOutline.current.style.top = endY.current + 'px';
        dotOutline.current.left = endX.current + 'px';
    }

    const delay = 5;
    const cursorVisible = useRef(true)
    const cursorEnglarged = useRef(false);

    const endX = useRef (window.innerWidth / 2);
    const endY = useRef (window.innerHeight / 2)
    const _x = useRef(0);
    const _y = useRef(0);

    const requestRef = useRef(null);

    const theme = useSelector((state) => state.theme.theme)
    // console.log(theme.background)

  return (
    <>
        <div ref={dotOutline} className="cursor-dot-outline invisible sm:visible" style={{backgroundColor: theme.background}}></div>
    </>
  )
}

export default Cursor