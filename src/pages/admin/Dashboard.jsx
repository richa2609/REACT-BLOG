import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBlog } from '../../redux/blogSlice.js';
import { onImgError } from '../../utils.js';

export default function Dashboard() {
  const dispatch = useDispatch();
  const { items } = useSelector((s) => s.blogs);
  const [search, setSearch] = useState('');
  const published = items.filter((b) => b.status === 'Published').length;
  const rows = items.filter((b) => (b.title + b.author).toLowerCase().includes(search.toLowerCase()));

  const remove = (id) => { if (window.confirm('Delete this blog?')) dispatch(deleteBlog(id)); };

  const stats = [['Total Blogs', items.length, '#2e7d32'], ['Published', published, '#689f38'], ['Drafts', items.length - published, '#ff8f1f']];
  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-brand m-0">Admin Dashboard</h2>
        <Link to="/admin/add-blog" className="btn btn-orange">+ Add Blog</Link>
      </div>
      <div className="row g-3 mb-4">
        {stats.map(([label, n, bg]) => (
          <div className="col-md-4" key={label}><div className="card stat-card p-3 text-center" style={{ background: bg }}>
            <div className="fs-1 fw-bold">{n}</div><div>{label}</div></div></div>
        ))}
      </div>
      <input className="form-control mb-3" placeholder="Search blogs..." value={search} onChange={(e) => setSearch(e.target.value)} />
      <div className="table-responsive bg-white rounded-4 shadow-sm">
        <table className="table align-middle mb-0">
          <thead><tr><th>Image</th><th>Title</th><th>Author</th><th>Category</th><th>Status</th><th>Actions</th></tr></thead>
          <tbody>
            {rows.map((b) => (
              <tr key={b.id}>
                <td><img src={b.image} className="table-img" alt="" onError={onImgError} /></td>
                <td>{b.title}</td><td>{b.author}</td><td>{b.category}</td>
                <td><span className={`badge ${b.status === 'Published' ? 'bg-success' : 'bg-warning text-dark'}`}>{b.status}</span></td>
                <td className="text-nowrap">
                  <Link to={`/blogs/${b.id}`} className="btn btn-sm btn-outline-secondary me-1">View</Link>
                  <Link to={`/admin/edit/${b.id}`} className="btn btn-sm btn-brand me-1">Edit</Link>
                  <button className="btn btn-sm btn-danger" onClick={() => remove(b.id)}>Delete</button>
                </td>
              </tr>
            ))}
            {!rows.length && <tr><td colSpan="6" className="text-center text-muted py-4">No blogs found</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
}
