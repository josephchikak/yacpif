import {useTrail, a } from '@react-spring/web'
import { Button, } from '@chakra-ui/react'
import {ArrowForwardIcon} from '@chakra-ui/icons'
// import Navbar from '../components'
import './pages.css'
import { Element } from 'react-scroll/modules'



const Home = () => {



  return (
   <Element name='home'>
      <div id='home' className='w-[100vw] h-[100vh] md:h-[100vh] pb-10 flex justify-center border-b border-black'>
        {/* <Navbar/> */}
        <div className='pt-20 pb-10 flex h-full sm:justify-center justify-start bg-opacity-1 bg-gradient-to-r from-black-500 to-white-500 '>
        <div className='w-[70vw] lg:w-[40vw] md:[h-40vh] flex justify-start md:justify-center break-normal flex-col pl-10 md:pl-20'> 
            <h1 className='mainText pr-3 text-5xl pt-20 md:text-7xl lg:text-8xl break-normal text-white'> Young Ambassadors for Community Peace and Interfaith Foundation </h1>
            <h2 className='text-2xl text-white sm:text-black'> Building Peace in Plateau State </h2>
            <div className='pt-10'>
              {/* <Button 
              rightIcon={<ArrowForwardIcon />} 
              colorScheme='black' 
              variant='outline'
                width='200px'
                className='btnn2 text-white'>
                Contact us
              </Button> */}
            </div>
          </div>

          <div id='homeImg' className='w-[40vw] flex justify-start flex-col pt-5' > 
            
          </div>

        </div>
          

      </div>

   </Element>
    
  )
}

export default Home