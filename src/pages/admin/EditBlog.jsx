import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import BlogForm from '../../components/BlogForm.jsx';
import { updateBlog } from '../../redux/blogSlice.js';

export default function EditBlog() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const blog = useSelector((s) => s.blogs.items.find((b) => String(b.id) === id));
  if (!blog) return <div className="container py-5">Loading blog...</div>;
  const save = async (data) => { await dispatch(updateBlog({ ...data, id: blog.id })); navigate('/admin'); };
  return (
    <div className="container py-5" style={{ maxWidth: 900 }}>
      <h2 className="text-brand mb-4">Edit Blog</h2>
      <BlogForm initial={blog} onSubmit={save} label="Update Blog" />
    </div>
  );
}
