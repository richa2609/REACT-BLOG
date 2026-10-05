import { Link } from 'react-router-dom';
import { onImgError } from '../utils.js';
export default function BlogCard({ blog }) {
  const { id, title, author, category, image, description, publishDate } = blog;
  return (
    <div className="card blog-card">
      <img src={image} className="card-img-top" alt={title} onError={onImgError} />
      <div className="card-body d-flex flex-column">
        <span className="badge badge-cat align-self-start mb-2">{category}</span>
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-muted small flex-grow-1">{description}</p>
        <div className="d-flex justify-content-between align-items-center">
          <small className="text-muted">{author} · {publishDate}</small>
          <Link to={`/blogs/${id}`} className="btn btn-sm btn-brand">Read</Link>
        </div>
      </div>
    </div>
  );
}
