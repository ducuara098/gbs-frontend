import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { ServiciosPage, ServiceDetailPage } from './pages/Servicios'
import { NosotrosPage, ContactoPage, LoginPage, AdminPage } from './pages/Pages'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/*" element={<WithNav />} />
      </Routes>
    </BrowserRouter>
  )
}

function WithNav() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<ServiciosPage />} />
        <Route path="/servicios/:slug" element={<ServiceDetailPage />} />
        <Route path="/nosotros" element={<NosotrosPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
      </Routes>
    </>
  )
}
