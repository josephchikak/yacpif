import { useSpring, animated, useScroll, useInView } from '@react-spring/web'
// import { ,  } from "react-spring";

// import rev from '../assets/images/image4.jpg'
// import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

import { Element } from "react-scroll/modules"

const About = () => {

    const [ref, inView] = useInView();
    // const [ref2, inView2] = useInView();
    // const [ref3, inView3] = useInView();

    // const { from } = useScroll()

    // const projects = ['project1', 'project2', 'project3']
  return (
    <Element name="about">
        <div  id='about' className='w-[100vw] h-[70vh] sm:h-[35vh] flex justify-center items-center'>
        <animated.div ref={ref} style={{opacity: inView ? 1: 0, transition:'1s ease-in-out'}} className='lg:w-[70vw] w-[100vw] p-5 '>
            <h1 className='text-2xl pb-5'>About</h1>
            <p className='text'>
            Young Ambassadors for Community Peace and Interfaith Foundation (YACPIF) is an NGO based in Jos, Nigeria whose mission is to prevent conflict and achieve and sustain peace through a community approach. <br/> YACPIF utilizes interesting and engaging activities such as rallies and sports to bring rival armed groups together to create and build lasting relationships. YACPIF registers young people between the ages of 14 to 40 who will stand for peace in a conflicted community as ambassadors of peace.
            </p>
            {/* <img className='rounded-full h-[500px]' src={rev} alt="Rev. Yakubu Pam" /> */}      
        </animated.div>
    </div>

    </Element> 
    
  )
}


{/* <div id='projects' className='flex flex-row w-[50vw]'>
{projects.map((project, i) => { 
    return <div key={i}> 
        <Card maxW='sm'>
            <CardBody>
                <Image
                src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                alt='Green double couch with wooden legs'
                // borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                <Heading size='md'>Living room Sofa</Heading>
                <Text>
                    This sofa is perfect for modern tropical spaces, baroque inspired
                    spaces, earthy toned spaces and for people who love a chic design with a
                    sprinkle of vintage design.
                </Text>
            
                </Stack>
            </CardBody>
            {/* <Divider /> */}
//             <CardFooter>
      
//                 <Button variant='outline' colorScheme='black'>
//                     Learn more
//                 </Button>
           
//             </CardFooter>
//             </Card>
    
//       </div>
// })}
// </div> */}


export default About