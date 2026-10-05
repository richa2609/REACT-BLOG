import { useState } from 'react';
import { CATEGORIES } from '../utils.js';

const empty = { title:'', author:'', email:'', category:'', image:'', description:'', content:'', tags:'', publishDate:'', status:'Published' };

export default function BlogForm({ initial, onSubmit, label = 'Save Blog' }) {
  const [form, setForm] = useState({ ...empty, ...initial });
  const [errors, setErrors] = useState({});

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    const e = {};
    if (form.title.trim().length < 5) e.title = 'Title must be at least 5 characters';
    if (!form.author.trim()) e.author = 'Author is required';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.category) e.category = 'Select a category';
    if (!/^https?:\/\//.test(form.image)) e.image = 'Enter a valid image URL (http/https)';
    if (form.description.trim().length < 10) e.description = 'Description must be at least 10 characters';
    if (form.content.trim().length < 30) e.content = 'Content must be at least 30 characters';
    if (!form.tags.trim()) e.tags = 'Add at least one tag';
    if (!form.publishDate) e.publishDate = 'Select publish date';
    return e;
  };

  const submit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) onSubmit({ ...form, tags: form.tags.split(',').map((t) => t.trim()).filter(Boolean).join(',') });
  };

  const field = (name, lbl, props = {}) => (
    <div className="col-md-6">
      <label className="form-label fw-semibold">{lbl}</label>
      <input name={name} value={form[name]} onChange={handle} className={`form-control ${errors[name] ? 'is-invalid' : ''}`} {...props} />
      <div className="invalid-feedback">{errors[name]}</div>
    </div>
  );

  return (
    <form onSubmit={submit} noValidate className="row g-3 bg-white p-4 rounded-4 shadow-sm">
      {field('title', 'Blog Title')}
      {field('author', 'Author')}
      {field('email', 'Email', { type: 'email' })}
      <div className="col-md-6">
        <label className="form-label fw-semibold">Category</label>
        <select name="category" value={form.category} onChange={handle} className={`form-select ${errors.category ? 'is-invalid' : ''}`}>
          <option value="">Select category</option>
          {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
        </select>
        <div className="invalid-feedback">{errors.category}</div>
      </div>
      {field('image', 'Image URL', { placeholder: 'https://images.unsplash.com/...' })}
      {field('tags', 'Tags (comma separated)', { placeholder: 'salad, protein' })}
      {field('publishDate', 'Publish Date', { type: 'date' })}
      <div className="col-md-6">
        <label className="form-label fw-semibold">Status</label>
        <select name="status" value={form.status} onChange={handle} className="form-select">
          <option>Published</option><option>Draft</option>
        </select>
      </div>
      <div className="col-12">
        <label className="form-label fw-semibold">Description</label>
        <textarea name="description" rows="2" value={form.description} onChange={handle} className={`form-control ${errors.description ? 'is-invalid' : ''}`} />
        <div className="invalid-feedback">{errors.description}</div>
      </div>
      <div className="col-12">
        <label className="form-label fw-semibold">Content</label>
        <textarea name="content" rows="6" value={form.content} onChange={handle} className={`form-control ${errors.content ? 'is-invalid' : ''}`} />
        <div className="invalid-feedback">{errors.content}</div>
      </div>
      <div className="col-12"><button className="btn btn-brand px-4">{label}</button></div>
    </form>
  );
}
