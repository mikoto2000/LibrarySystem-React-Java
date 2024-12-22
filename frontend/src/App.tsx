import './App.css'
import { Link, Route, Routes } from 'react-router'
import { BookMastersPage } from './pages/bookmaster/BookMastersPage'
import { AuthorsPage } from './pages/author/AuthorsPage'
import { AuthorDetailPage } from './pages/author/AuthorDetailPage'
import { AuthorCreatePage } from './pages/author/AuthorCreatePage'
import { BookMasterCreatePage } from './pages/bookmaster/BookMasterCreatePage'
import { BookMasterDetailPage } from './pages/bookmaster/BookMasterDetailPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <ul>
          <li><Link to="/authors">Authors</Link></li>
          <li><Link to="/bookMasters">BookMasters</Link></li>
        </ul>
      }
      />
      <Route path="/authors" element={
        <AuthorsPage />
      }
      />
      <Route path="/authors/:id" element={
        <AuthorDetailPage />
      }
      />
      < Route path="/authors/create" element={
        <AuthorCreatePage />
      }
      />
      < Route path="/bookMasters" element={
        <BookMastersPage />
      }
      />
      <Route path="/bookMasters/:id" element={
        <BookMasterDetailPage />
      }
      />
      < Route path="/bookMasters/create" element={
        <BookMasterCreatePage />
      }
      />
    </Routes>
  )
}

export default App
