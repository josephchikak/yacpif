import React, { useEffect, useState } from 'react'
import { Button } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import './pages.css'
import { Element } from 'react-scroll/modules'
import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from '../themeSlice'

import {
  getAllPosts,
  getPostwithID,
  getPostPhotosKeys,
  getAllPostsOrderedByTimestamp,
  getPhotoWithId,
  getTagWithId,
  getPostTagsKeys,
  getTagPostsKeys
} from '../firebase'
import { fetchPosts } from '../postSlice'


const Home = () => {

  const dispatch = useDispatch()
 
  return (
    <>
    
    
      <Element name="home">
        <div
          id="home"
          className="w-[100vw] md:h-[100vh] pb-10 flex justify-center border-b border-black text-center"
          onMouseOver={() => dispatch(setTheme('#000000'))}
        >

          <div className="pt-20 pb-10 flex h-full sm:justify-center justify-center bg-opacity-1 bg-gradient-to-r from-black-500 to-white-500 ">
            <div className="w-[80vw] lg:w-[50vw] md:h-full flex justify-start md:justify-center break-normal flex-col md:pl-20">
              <h1 className="mainText text-5xl pt-20 md:text-7xl lg:text-7xl break-normal text-black">
                {' '}
                Young Ambassadors for Community Peace and Interfaith Foundation{' '}
              </h1>
              <h2 id="peaceText" className="text-2x text-black">
                {''}
                Building Peace in Plateau State{''}
              </h2>
              <div className="pt-10"></div>
            </div>
          </div>
        </div>
      </Element>
    </>

  )
}

export default Home
