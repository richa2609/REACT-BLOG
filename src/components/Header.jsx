import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';
export default function Header() {
  const [open, setOpen] = useState(false);
  const cls = ({ isActive }) => 'nav-link' + (isActive ? ' fw-bold text-brand' : '');
  return (
    <nav className="navbar navbar-expand-md bg-white shadow-sm sticky-top">
      <div className="container">
        <Link className="navbar-brand" to="/"><img src="/logo.svg" alt="RICH HEALTH logo" /></Link>
        <button className="navbar-toggler" onClick={() => setOpen(!open)}><span className="navbar-toggler-icon" /></button>
        <div className={`collapse navbar-collapse justify-content-end ${open ? 'show' : ''}`} onClick={() => setOpen(false)}>
          <ul className="navbar-nav gap-md-2">
            <li className="nav-item"><NavLink end to="/" className={cls}>Home</NavLink></li>
            <li className="nav-item"><NavLink to="/blogs" className={cls}>Blogs</NavLink></li>
            <li className="nav-item"><NavLink to="/admin" className={cls}>Admin</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
