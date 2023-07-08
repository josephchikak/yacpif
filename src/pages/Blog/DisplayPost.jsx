import React from 'react'
import { useNavigate } from 'react-router-dom'
import PostCard from './PostCard'


const DisplayPost = ({title, loading, posts}) => {
    const navigate = useNavigate()

    const handleNavigate = (post)  =>{
        navigate(`article/${post.value.title}`, {state: post})
    }
  return (
    <div className='w-[100%] sm:w-[100vw] h-full justify-center items-center pb-2 flex '>
        
        <div className='w-[80%] flex mt-[20px] gap-[26px] sm:w-[100%] items-center flex-col'>
          <div className=' flex justify-start sm:w-[1000px] sm:h-[50px] p-2  items-center'>
            <h2 className='p-2 rounded-md bg-white'>Recent Articles</h2>
          </div>
            {posts.map((post) => 
                <PostCard
                    key={post.key}
                    post = {post}
                    handleClick={() => handleNavigate(post)}   
                />
            )}
        </div>
      
    </div>
  )
}

export default DisplayPost