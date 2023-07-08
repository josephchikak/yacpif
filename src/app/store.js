import { configureStore } from '@reduxjs/toolkit';

import themeSlice from '../themeSlice'
import {postReducer} from '../postSlice'

export const store = configureStore({
    reducer: {
      theme: themeSlice,
      post: postReducer,
    },
  })
  