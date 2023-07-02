import React, { useEffect } from 'react'
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

const Home = () => {
  const dispatch = useDispatch()
  // const postIdSample = '-NYGkHb8mtc7Uu8tlrEc'
  // const photoIdSample = '-NY-VGUcYYmY2ZDEHBe6'

  // examples of how to use firebase sdk functions
  // useEffect(() => {
  //   async function fetchAllPosts() {
  //     // const response = await getAllPosts()
  //     const response = await getAllPostsOrderedByTimestamp()
  //     console.log('response', response)
  //   }
  //   async function fetchPostwithID() {
  //     const res = await getPostwithID(postIdSample)
  //     console.log('post response: ', res)
  //   }
  //   async function fetchPhotosKeys() {
  //     const res = await getPostPhotosKeys(postIdSample)
  //     console.log('photosKeys: ', res)
  //   }
  //   async function fetchPhotoWithId() {
  //     const res =  await getPhotoWithId(photoIdSample)
  //     console.log('photo response:', res)
  //   }
  //   // fetchAllPosts()
  //   // fetchPostwithID()
  //   // fetchPhotosKeys()
  //   // fetchPhotoWithId()

  //   // getAllPosts
  //   //   .then((res) => {
  //   //     console.log('posts: ', res.posts)
  //   //   })
  //   //   .catch((error) => {
  //   //     console.error(error)
  //   //   })
  //   // const { posts } = getAllPosts()
  //   // console.log(posts)
  //   // console.log(getAllPosts())
  //   // console.log(postsRef)
  // }, [])

  return (
    <Element name="home">
      <div
        id="home"
        className="w-[98vw] md:h-[100vh] pb-10 flex justify-center border-b border-black text-center"
        onMouseOver={() => dispatch(setTheme('#000000'))}
      >
        <div className="pt-20 pb-10 flex h-full sm:justify-center justify-center bg-opacity-1 bg-gradient-to-r from-black-500 to-white-500 ">
          <div className="w-[80vw] lg:w-[50vw] md:h-full flex justify-start md:justify-center break-normal flex-col md:pl-20">
            <h1 className="mainText text-5xl pt-20 md:text-7xl lg:text-7xl break-normal text-black">
              {' '}
              Young Ambassadors for Community Peace and Interfaith Foundation{' '}
            </h1>
            <h2 id="peaceText" className="text-2x text-black">
              {' '}
              Building Peace in Plateau State{' '}
            </h2>
            <div className="pt-10"></div>
          </div>
        </div>
      </div>
    </Element>
  )
}

export default Home
