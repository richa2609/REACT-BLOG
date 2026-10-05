import { CATEGORIES } from '../utils.js';
export default function SearchBar({ search, setSearch, category, setCategory, sort, setSort }) {
  return (
    <div className="row g-2 mb-4">
      <div className="col-md-5"><input className="form-control" placeholder="Search by title or author..." value={search} onChange={(e) => setSearch(e.target.value)} /></div>
      <div className="col-md-3">
        <select className="form-select" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
        </select>
      </div>
      <div className="col-md-4">
        <select className="form-select" value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="latest">Latest</option>
          <option value="oldest">Oldest</option>
          <option value="az">Title A-Z</option>
          <option value="za">Title Z-A</option>
        </select>
      </div>
    </div>
  );
}
