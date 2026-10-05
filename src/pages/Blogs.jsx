import { useState, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import BlogList from '../components/BlogList.jsx';
import SearchBar from '../components/SearchBar.jsx';
import Pagination from '../components/Pagination.jsx';

const PER_PAGE = 6;

export default function Blogs() {
  const { items, loading, error } = useSelector((s) => s.blogs);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [sort, setSort] = useState(localStorage.getItem('rh-sort') || 'latest');
  const [page, setPage] = useState(1);

  useEffect(() => { localStorage.setItem('rh-sort', sort); }, [sort]);
  useEffect(() => { setPage(1); }, [search, category, sort]);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    const list = items.filter((b) => b.status === 'Published'
      && (b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q))
      && (!category || b.category === category));
    const sorters = {
      az: (a, b) => a.title.localeCompare(b.title),
      za: (a, b) => b.title.localeCompare(a.title),
      latest: (a, b) => new Date(b.publishDate) - new Date(a.publishDate),
      oldest: (a, b) => new Date(a.publishDate) - new Date(b.publishDate),
    };
    return [...list].sort(sorters[sort]);
  }, [items, search, category, sort]);

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const visible = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <div className="container py-5">
      <h2 className="text-brand mb-4">All Blogs</h2>
      <SearchBar {...{ search, setSearch, category, setCategory, sort, setSort }} />
      {error && <div className="alert alert-danger">{error}</div>}
      {loading ? <div className="text-center py-5"><div className="spinner-border text-success" /></div> : <BlogList blogs={visible} />}
      <Pagination page={page} totalPages={totalPages} onChange={setPage} />
    </div>
  );
}
