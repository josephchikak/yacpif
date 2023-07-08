import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";   
import {getAllPosts, getPhotoWithId ,getPostPhotosKeys} from './firebase';

// const initialState = {
//         ID: '',
//         images:[],
//         article:''
// };

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async (thunkAPI) => { 
        // getAllPosts().then((response) =>{
            //     // setPost(response)
            //   console.log(response)
        const response = await getAllPosts()
     
        return response

    }
)


// getPostPhotosKeys(state.key).then((response) =>{
//     response.map(id =>{
//         getPhotoWithId(id.trim()).then((response) =>{
//             return response.value.url
//         })
//     })
//     // setPost(response
// //    console.log(response)
// //   dispatch(postsCollected(response))
//  }) 

// export const fetchPhotos = createAsyncThunk(
//     'posts/fetchPhotos',
//     async (thunkAPI) => { 
//       const response = await getPostPhotosKeys(id)
      
//         response.map(id =>{
//             getPhotoWithId(id.trim()).then((response) =>{
//                 photos.push((response.value.url))
//                })

      
           

//         // getAllPosts().then((response) =>{
//             //     // setPost(response)
//             //   console.log(response)
       

//     }
// )



export const postSlice = createSlice({
    name:'post',
    initialState: {
        posts: [],
        loading: false
    },
    reducers:{ },
    extraReducers: {
        [fetchPosts.pending] : (state) =>{
            state.loading = true
        },
        [fetchPosts.fulfilled] : (state, {payload}) =>{
            state.loading = false
            state.posts = payload
            state.photos = payload
        },
        [fetchPosts.rejected] : (state) =>{
            state.loading = false
        },
        // [fetchPhotos.pending] : (state) =>{
        //     state.loading = true
        // },
        // [fetchPhotos.fulfilled] : (state) =>{
        //     state.loading = false
        //     state.photos = payload
        // },
        // [fetchPhotos.rejected] : (state) =>{
        //     state.loading = false
        // },
    },
    // name: 'photos',
    // initialState: {
    //     photos: [],
    //     loading: false
    // },
    // reducers:{ },
    // extraReducers: {
    //     [fetchP.pending] : (state) =>{
    //         state.loading = true
    //     },
    //     [fetchPosts.fulfilled] : (state, {payload}) =>{
    //         state.loading = false
    //         state.posts = payload
    //         state.photos = payload
    //     },
    //     [fetchPosts.rejected] : (state) =>{
    //         state.loading = false
    //     },
    // }
})

// export const {postsLoading, postsCollected} = postSlice.actions;


export const postReducer = postSlice.reducer
