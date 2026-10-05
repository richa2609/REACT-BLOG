import BlogCard from './BlogCard.jsx';
export default function BlogList({ blogs }) {
  if (!blogs.length) return <p className="text-center text-muted py-5">No blogs found.</p>;
  return (
    <div className="row g-4">
      {blogs.map((b) => (<div className="col-12 col-md-6 col-lg-4" key={b.id}><BlogCard blog={b} /></div>))}
    </div>
  );
}
