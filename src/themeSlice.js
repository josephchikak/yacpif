import { createSlice } from "@reduxjs/toolkit";   

const initialState = {
    theme: {
        background: '#000000e3'
    },
};

const themeSlice = createSlice({
    name:'theme',
    initialState,
    reducers:{
        setTheme: (state, action) => {
            state.theme.background = action.payload
        }
    }
})

export const {setTheme} = themeSlice.actions;

export default themeSlice.reducer