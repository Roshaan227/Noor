import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Reviews from './pages/Reviews'
import JoinAsPainter from './pages/JoinAsPainter'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/join" element={<JoinAsPainter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
