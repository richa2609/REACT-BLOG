export default function Pagination({ page, totalPages, onChange }) {
  if (totalPages <= 1) return null;
  return (
    <nav className="mt-4"><ul className="pagination justify-content-center">
      <li className={`page-item ${page === 1 ? 'disabled' : ''}`}><button className="page-link" onClick={() => onChange(page - 1)}>Prev</button></li>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
        <li key={n} className={`page-item ${n === page ? 'active' : ''}`}><button className="page-link" onClick={() => onChange(n)}>{n}</button></li>
      ))}
      <li className={`page-item ${page === totalPages ? 'disabled' : ''}`}><button className="page-link" onClick={() => onChange(page + 1)}>Next</button></li>
    </ul></nav>
  );
}
