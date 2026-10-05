# 🥗 RICH HEALTH — Blog Management System
---

## 📖 About

**RICH HEALTH** is a React blog application for a healthy salad brand. Visitors can browse, search, filter, sort and paginate blog posts, while admins can add, edit and delete them. Blog data is stored in a **JSON Server** REST API and managed in the app with **Redux Toolkit**.

---

## ✨ Features

### 👥 Public

- 🏠 Home page with hero banner, categories and latest posts
- 📝 Blog list with:
  - 🔍 Search by title or author
  - 🏷️ Category filter
  - ↕️ Sort: **A–Z, Z–A, Latest, Oldest**
  - 📄 Pagination (6 posts per page)
- 📰 Blog details page with image, author, email, tags and full content
- 💾 Sort choice is remembered using **LocalStorage**

### 🔐 Admin

- 📊 Dashboard showing **Total Blogs**, **Published** and **Drafts** counts
- ➕ Add, ✏️ Edit and 🗑️ Delete blogs (delete asks for confirmation)
- 🔍 Dashboard search
- ✅ Blog form with validation on every field

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 18 (Vite)** | UI library and fast build tool |
| **React Router 6** | Client-side routing |
| **Redux Toolkit** + **React-Redux** | Global state management |
| **Axios** | HTTP requests |
| **JSON Server** | Fake REST API |
| **Bootstrap 5** | Responsive styling |

---

## 📁 Folder Structure

```
rich-health-blog/
├── public/
│   └── logo.svg
├── src/
│   ├── components/     Header, Footer, BlogCard, BlogList,
│   │                   BlogForm, SearchBar, Pagination
│   ├── pages/          Home, Blogs, BlogDetails
│   │   └── admin/      Dashboard, AddBlog, EditBlog
│   ├── redux/          store.js, blogSlice.js
│   ├── App.jsx
│   ├── main.jsx
│   ├── utils.js
│   └── index.css
└── db.json             JSON Server database
```

---

## 🧭 Routes

| Route | Page | Access |
|---|---|---|
| `/` | Home | Public |
| `/blogs` | Blog list | Public |
| `/blogs/:id` | Blog details | Public |
| `/admin` | Dashboard | Admin |
| `/admin/add-blog` | Add blog | Admin |
| `/admin/edit/:id` | Edit blog | Admin |

---

## 🚀 Installation and Run

**Requirements:** Node.js 18 or later

```bash
# 1. Clone the repository
git clone https://github.com/richa2609/REACT.git
cd REACT

# 2. Install dependencies
npm install
```

Then start the two servers in **separate terminals**:

```bash
# Terminal 1 — JSON Server (API)
npm run server
# → http://localhost:3001/blogs

# Terminal 2 — React app
npm run dev
# → http://localhost:5173
```

> ⚠️ Both servers must be running for the app to load blog data.

---

## 🔌 API Endpoints (JSON Server)

Base URL: `http://localhost:3001`

| Method | URL | Action |
|---|---|---|
| `GET` | `/blogs` | Get all blogs |
| `POST` | `/blogs` | Add a blog |
| `PUT` | `/blogs/:id` | Update a blog |
| `DELETE` | `/blogs/:id` | Delete a blog |

---

## 🧾 Blog Fields

| Field | Description |
|---|---|
| `title` | Blog title |
| `author` | Author name |
| `email` | Author email |
| `category` | Blog category |
| `image` | Cover image URL |
| `description` | Short summary |
| `content` | Full blog content |
| `tags` | Comma-separated tags |
| `publishDate` | Date of publishing |
| `status` | `Published` or `Draft` |

**Example:**

```json
{
  "id": 1,
  "title": "5 Benefits of Eating Fresh Salad",
  "author": "Richa",
  "email": "richa@example.com",
  "category": "Nutrition",
  "image": "https://example.com/salad.jpg",
  "description": "Why salads should be part of your daily diet.",
  "content": "Full article text goes here...",
  "tags": "salad, healthy, diet",
  "publishDate": "2026-10-05",
  "status": "Published"
}
```

---

## 🎓 Concepts Covered

| Area | Topics |
|---|---|
| **React basics** | Components and JSX, Props and State, Events |
| **Forms** | Forms and Validation |
| **Hooks** | `useState`, `useEffect`, `useMemo`, `useParams`, `useNavigate` |
| **Navigation** | Routing |
| **Data** | CRUD, Axios, JSON Server |
| **State management** | Redux, LocalStorage |
| **Features** | Search, Sort, Filtering, Pagination |
| **Styling** | Bootstrap |
| **JavaScript** | Spread and Rest operators |

---

## CODE EXPLAINATION & OUTPUT

CLICK HERE: https://drive.google.com/drive/folders/1BZawViBtJMSoHW34B2Hz-qmRpfg4qnVB?usp=sharing

---

## 👩‍💻 Author

**Richa** — [@RICHA2609](https://github.com/RICHA2609)

---
