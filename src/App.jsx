import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Contact from './components/Contact';
import Layout from './pages/Layout';
import Blog from './components/Blog';

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="home" element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blog" element={<Blog />} />
          </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
