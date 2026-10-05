import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BlogList from '../components/BlogList.jsx';
import { CATEGORIES } from '../utils.js';

export default function Home() {
  const { items, error } = useSelector((s) => s.blogs);
  const latest = [...items].filter((b) => b.status === 'Published')
    .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate)).slice(0, 3);
  return (
    <>
      <section className="hero text-center">
        <div className="container">
          <h1 className="display-4 fw-bold">Eat Fresh. Live <span style={{ color: '#ffb74d' }}>Rich.</span></h1>
          <p className="lead mb-4">Healthy salad recipes, nutrition tips and meal-prep ideas from RICH HEALTH.</p>
          <Link to="/blogs" className="btn btn-orange btn-lg">Explore Blogs</Link>
        </div>
      </section>
      <div className="container py-5">
        {error && <div className="alert alert-danger">{error}</div>}
        <div className="d-flex flex-wrap gap-2 justify-content-center mb-5">
          {CATEGORIES.map((c) => <span key={c} className="badge badge-cat fs-6 py-2 px-3">{c}</span>)}
        </div>
        <h3 className="text-brand mb-4">Latest Posts</h3>
        <BlogList blogs={latest} />
      </div>
    </>
  );
}
