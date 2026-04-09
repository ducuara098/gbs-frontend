import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">Grupo <span>GBS</span></div>
          <p>Instalaciones críticas bajo control total. Más de 30 años protegiendo entornos industriales y corporativos.</p>
          <div className="footer-empresas">
            <span className="footer-tag">DIM</span>
            <span className="footer-tag">HCA</span>
            <span className="footer-tag">TIG</span>
          </div>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">Servicios</div>
          <Link to="/servicios">Calidad del aire interior</Link>
          <Link to="/servicios">Mantenimiento mecánico</Link>
          <Link to="/servicios">Control de legionella</Link>
          <Link to="/servicios">Auditoría RITE</Link>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">Empresa</div>
          <Link to="/nosotros">Quiénes somos</Link>
          <Link to="/nosotros">Certificaciones</Link>
          <Link to="/contacto">Contacto</Link>
          <Link to="/login">Acceso admin</Link>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">Contacto</div>
          <span>+34 900 000 000</span>
          <span>info@gbs.group</span>
          <span>Madrid, España</span>
          <span>Cobertura nacional</span>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2025 Grupo GBS · Todos los derechos reservados</span>
        <div className="footer-legal">
          <a href="#">Privacidad</a>
          <a href="#">Aviso legal</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </footer>
  )
}
