import { configureStore } from '@reduxjs/toolkit';
import blogReducer from './blogSlice.js';
export default configureStore({ reducer: { blogs: blogReducer } });
