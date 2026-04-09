import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const WindIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 8C8 10 5.9 16.17 3.82 19.82L5.71 21l1-2 1 2 1-2 1 2c.96-1.42 1.74-2.76 2.38-4C13.85 14.57 17 14 17 8z"/>
  </svg>
)

export default function Navbar() {
  const { pathname } = useLocation()
  const links = [
    { to: '/', label: 'Inicio' },
    { to: '/servicios', label: 'Servicios' },
    { to: '/nosotros', label: 'Nosotros' },
    { to: '/contacto', label: 'Contacto' },
  ]

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="nav-logo">
          <div className="nav-logo-mark"><WindIcon /></div>
          <span>Grupo <em>GBS</em></span>
        </Link>

        <div className="nav-links">
          {links.map(l => (
            <Link key={l.to} to={l.to} className={`nav-link ${pathname === l.to ? 'active' : ''}`}>
              {l.label}
            </Link>
          ))}
          <Link to="/login" className="nav-link admin-link">· Admin</Link>
        </div>

        <div className="nav-actions">
          <Link to="/contacto" className="btn btn-outline btn-sm">Solicitar auditoría</Link>
          <Link to="/servicios" className="btn btn-primary btn-sm">Ver servicios</Link>
        </div>
      </div>
    </nav>
  )
}
