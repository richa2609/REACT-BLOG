import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onImgError } from '../utils.js';

export default function BlogDetails() {
  const { id } = useParams();
  const blog = useSelector((s) => s.blogs.items.find((b) => String(b.id) === id));
  if (!blog) return <div className="container py-5"><p>Blog not found or loading...</p><Link to="/blogs">Back to blogs</Link></div>;
  return (
    <div className="container py-5" style={{ maxWidth: 850 }}>
      <Link to="/blogs" className="text-decoration-none">← Back to blogs</Link>
      <img src={blog.image} alt={blog.title} className="detail-img my-4" onError={onImgError} />
      <span className="badge badge-cat">{blog.category}</span>
      <h1 className="mt-2 text-brand">{blog.title}</h1>
      <p className="text-muted">By {blog.author} ({blog.email}) · {blog.publishDate} · {blog.status}</p>
      <p className="lead">{blog.description}</p>
      <p style={{ whiteSpace: 'pre-line' }}>{blog.content}</p>
      <div className="d-flex gap-2 flex-wrap">
        {blog.tags.split(',').map((t) => <span key={t} className="badge bg-light text-success border">#{t}</span>)}
      </div>
    </div>
  );
}
