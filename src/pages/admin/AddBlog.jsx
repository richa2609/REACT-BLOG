import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import BlogForm from '../../components/BlogForm.jsx';
import { addBlog } from '../../redux/blogSlice.js';

export default function AddBlog() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const save = async (data) => { await dispatch(addBlog(data)); navigate('/admin'); };
  return (
    <div className="container py-5" style={{ maxWidth: 900 }}>
      <h2 className="text-brand mb-4">Add New Blog</h2>
      <BlogForm onSubmit={save} label="Add Blog" />
    </div>
  );
}
