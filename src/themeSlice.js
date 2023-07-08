import { createSlice } from "@reduxjs/toolkit";   

const initialState = {
    theme: {
        background: '#000000e3',
        scale: 1,
        opactity: 1
    },
};

const themeSlice = createSlice({
    name:'theme',
    initialState,
    reducers:{
        setTheme: (state, action) => {
            state.theme.background = action.payload
        },
        setScale:(state, action) =>{
            state.theme.scale = action.payload
        }
    }
})

export const {setTheme, setScale} = themeSlice.actions;

export default themeSlice.reducer