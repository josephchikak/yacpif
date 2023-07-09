import React, {useState, useEffect, useLayoutEffect} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPhotoWithId, getPostPhotosKeys } from '../../firebase';
import { SpinnerIcon } from '@chakra-ui/icons'
import {LazyLoadImage } from 'react-lazy-load-image-component'
import yacpif from './assets/yacpif.png'




const PostDetails = () => {
    const {state} = useLocation()
    const [photo, setPhoto] = useState([])
    const [date, setDate] = useState('')
    const [title, setTitle] =useState([])
  

    useLayoutEffect(() =>{
        fetchKeys()

    }, [])

    const fetchKeys = async () => {

        const photoKeys = await getPostPhotosKeys(state.key)

        photoKeys.forEach(async (id) => {
        const photosUrl =  await getPhotoWithId(id.trim())  
        setPhoto(current => [...current, photosUrl.value.url])
        setTitle(current => [...current, photosUrl.value.title])
        setDate(new Date(state.value.timestamp))
   
    })}


  return(
    <>


            { photo.length && state.date !== ''  ? 
    <div   style={{ 'overflowY':scroll }} className='w-[100vw] h-full flex justify-center relative mb-10'>
        <div className='flex justify-center w-[80vw] sm:w-[50vw] h-full pt-20 mb-10'>

            <div className='flex flex-col'>
                <h2 className='text-[1.5rem] sm:text-[3rem]'>{state.value.title}</h2>
                <p className='pt-2'>{date.toDateString()}</p>
                <p className='pt-5 pb-5 indent-8 leading-loose'>{state.value.article}</p>
                <div className='grid grid-cols-2 sm:grid-cols-3 place-items-center gap-4 '>
                 <p className='col-span-3 p-5'>Photo Gallery</p>

                { (photo.map((url, i) => { 
                            return <div key={i} className='relative imgTitle'>
                                <div className='absolute invisible w-full h-[300px] flex flex-col justify-end z-10 scale-[105%]'>
                                   <p className='text-white p-2 invinsible '> {title[i]}</p> 
                                </div>
                                    <LazyLoadImage src={`${url}`} alt='articlePhotos' placeholderSrc={yacpif} loading='lazy' className='hover:scale-[105%] transition-all ease-in-out duration-500  sm:w-[300px] sm:h-[300px] object-cover'/>
                                </div>
                        }))}

                    </div>
            </div>  
         </div>
    </div>

            : 
            <div style={{}} className='absolute w-[100vw] h-[100vh] flex justify-center items-center animate-spin '>
                <SpinnerIcon className='scale-150'/>
            </div>
            }
     
    </>
    
    )
}

export default PostDetails