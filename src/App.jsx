import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Blogs from './pages/Blogs.jsx';
import BlogDetails from './pages/BlogDetails.jsx';
import Dashboard from './pages/admin/Dashboard.jsx';
import AddBlog from './pages/admin/AddBlog.jsx';
import EditBlog from './pages/admin/EditBlog.jsx';
import { fetchBlogs } from './redux/blogSlice.js';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(fetchBlogs()); }, [dispatch]);
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/add-blog" element={<AddBlog />} />
          <Route path="/admin/edit/:id" element={<EditBlog />} />
          <Route path="*" element={<div className="container py-5"><h3>404 - Page not found</h3></div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
