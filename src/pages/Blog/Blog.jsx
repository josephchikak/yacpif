import React, {useEffect} from 'react'
import {  fetchPosts } from '../../postSlice'
import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from '../../themeSlice'
import DisplayPost from './DisplayPost'
import { Route, Routes } from 'react-router-dom'
import PostDetails from './PostDetails'
import { getPhotoWithId, getPostPhotosKeys} from '../../firebase'
import './Blog.css'
import { SpinnerIcon } from '@chakra-ui/icons'









const Blog = () => {
  const dispatch = useDispatch()


const { posts, loading} = useSelector((state) => state.post)


// console.log(photos)

useEffect(()=>{

  dispatch(fetchPosts())
}, [])


  if (loading) return  <div className='w-[100vw] h-[100vh] flex justify-center items-center animate-spin '>
  <SpinnerIcon className='scale-150'/>
</div>

  return (
    <>
    <div className='flex flex-col sm:w-full sm:h-full gap-2 items-center justify-center pt-20' id='blog'>
    <div className='w-[80vw] h-[20vh] sm:h-[500px] sm:w-[1000px] bg-white blogBg'>
    </div>

   <DisplayPost
        title='All Articles'
        loading = {loading}
        posts = {posts}
      />
    </div>

    </>
  )
}

export default Blog