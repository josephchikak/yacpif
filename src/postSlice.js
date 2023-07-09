import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";   
import {getAllPosts, getPhotoWithId ,getPostPhotosKeys} from './firebase';


export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async (thunkAPI) => { 
     
        const response = await getAllPosts()
     
        return response

    }
)




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
