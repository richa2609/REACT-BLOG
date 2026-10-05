import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API = 'http://localhost:3001/blogs';

export const fetchBlogs = createAsyncThunk('blogs/fetch', async () => (await axios.get(API)).data);
export const addBlog = createAsyncThunk('blogs/add', async (blog) => (await axios.post(API, blog)).data);
export const updateBlog = createAsyncThunk('blogs/update', async ({ id, ...rest }) =>
  (await axios.put(`${API}/${id}`, { id, ...rest })).data);
export const deleteBlog = createAsyncThunk('blogs/delete', async (id) => {
  await axios.delete(`${API}/${id}`);
  return id;
});

const blogSlice = createSlice({
  name: 'blogs',
  initialState: { items: [], loading: false, error: null },
  reducers: {},
  extraReducers: (b) => {
    b.addCase(fetchBlogs.pending, (s) => { s.loading = true; s.error = null; })
     .addCase(fetchBlogs.fulfilled, (s, a) => { s.loading = false; s.items = a.payload; })
     .addCase(fetchBlogs.rejected, (s) => { s.loading = false; s.error = 'Cannot reach JSON Server. Run: npm run server'; })
     .addCase(addBlog.fulfilled, (s, a) => { s.items = [...s.items, a.payload]; })
     .addCase(updateBlog.fulfilled, (s, a) => { s.items = s.items.map((x) => (x.id === a.payload.id ? { ...x, ...a.payload } : x)); })
     .addCase(deleteBlog.fulfilled, (s, a) => { s.items = s.items.filter((x) => x.id !== a.payload); });
  },
});
export default blogSlice.reducer;
