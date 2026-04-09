import { Link, useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import './Servicios.css'

const allServices = [
  { slug: 'calidad-aire', icon: '🌬️', title: 'Calidad del aire interior (CAI)', short: 'Auditoría completa según normas UNE 171330 y medición de parámetros ambientales en tiempo real.', norms: ['UNE 171330', 'UNE 100012', 'RITE IT 3.3', 'RD 865/2003'], items: ['Muestreo y análisis microbiológico del aire interior', 'Medición de CO₂, VOC, PM2.5, humedad y temperatura', 'Revisión de redes de conductos con cámara robotizada', 'Evaluación de filtros y unidades de tratamiento de aire', 'Informe técnico detallado con plan de acción', 'Certificado de cumplimiento normativo RITE', 'Seguimiento post-auditoría y acciones correctivas'] },
  { slug: 'mantenimiento', icon: '⚙️', title: 'Mantenimiento mecánico HVAC', short: 'Mantenimiento preventivo, correctivo y predictivo de equipos de climatización industrial.', norms: ['ISO 9001', 'RITE 2007', 'UNE EN 13306'], items: ['Mantenimiento preventivo programado', 'Mantenimiento correctivo 24/7', 'Análisis predictivo de vibraciones y termografía', 'Revisión de compresores, condensadores y evaporadores', 'Sustitución de filtros y limpieza de serpentines', 'Registros de mantenimiento y libro de incidencias'] },
  { slug: 'legionella', icon: '🧪', title: 'Control de legionella', short: 'Tratamiento y control microbiológico en torres de refrigeración, redes de agua y condensadores.', norms: ['RD 865/2003', 'UNE 100030', 'Normativa autonómica'], items: ['Análisis microbiológico de agua certificado por laboratorio acreditado', 'Tratamiento de choque con cloro o biocidas específicos', 'Limpieza y desinfección de torres de refrigeración', 'Plan de mantenimiento higiénico-sanitario', 'Registro y libro de mantenimiento oficial', 'Notificación a organismos sanitarios si procede'] },
  { slug: 'auditoria', icon: '📋', title: 'Auditoría RITE e inspecciones', short: 'Certificaciones de cumplimiento, informes periciales y planes de mantenimiento preventivo.', norms: ['RITE 2007', 'Real Decreto 1027/2007', 'UNE 100012'], items: ['Inspección de instalaciones térmicas según RITE', 'Revisión de documentación técnica y libro de mantenimiento', 'Auditoría energética de la instalación', 'Informe pericial con propuesta de mejoras', 'Certificado de cumplimiento para la administración', 'Plan de mejora y optimización energética'] },
  { slug: 'prevencion', icon: '🛡️', title: 'Prevención de riesgos', short: 'Evaluación de riesgos sanitarios, planes de emergencia y protocolos de bioseguridad.', norms: ['Ley 31/1995 PRL', 'RD 374/2001', 'ISO 45001'], items: ['Evaluación de riesgos higiénicos en el trabajo', 'Protocolos de bioseguridad para instalaciones críticas', 'Formación del personal en prevención de riesgos', 'Planes de emergencia ante incidentes biológicos', 'Gestión de residuos biológicos y químicos', 'Auditorías de seguridad periódicas'] },
  { slug: 'consultoria', icon: '📚', title: 'Consultoría técnica', short: 'Asesoramiento especializado en optimización energética y gestión de instalaciones críticas.', norms: ['ISO 50001', 'Directiva EED', 'UNE 216301'], items: ['Diagnóstico energético de instalaciones', 'Plan de optimización y ahorro energético', 'Asesoramiento en adecuación normativa', 'Gestión de subvenciones y ayudas del sector', 'Formación técnica especializada', 'Apoyo en licitaciones públicas y concursos'] },
]

export function ServiciosPage() {
  return (
    <div className="animate-fade-in">
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link to="/">Inicio</Link> › <span>Servicios</span></div>
          <h1 className="page-hero-title">Nuestros servicios técnicos</h1>
          <p className="page-hero-desc">Soluciones certificadas para el mantenimiento, control y auditoría de instalaciones de climatización y calidad del aire en entornos críticos.</p>
        </div>
      </div>
      <div className="container" style={{ padding: '52px 28px' }}>
        <div className="srv-list">
          {allServices.map((s, i) => (
            <Link key={s.slug} to={`/servicios/${s.slug}`} className="srv-list-card card card-hover" style={{ animationDelay: `${i * 0.06}s` }}>
              <div className="srv-list-icon">{s.icon}</div>
              <div className="srv-list-body">
                <h3>{s.title}</h3>
                <p>{s.short}</p>
                <div className="srv-list-norms">
                  {s.norms.map(n => <span key={n} className="norm-chip">{n}</span>)}
                </div>
              </div>
              <div className="srv-list-arrow">→</div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export function ServiceDetailPage() {
  const { slug } = useParams()
  const srv = allServices.find(s => s.slug === slug) || allServices[0]

  return (
    <div className="animate-fade-in">
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Inicio</Link> › <Link to="/servicios">Servicios</Link> › <span>{srv.title}</span>
          </div>
          <h1 className="page-hero-title">{srv.title}</h1>
          <p className="page-hero-desc">{srv.short}</p>
        </div>
      </div>

      <div className="container srv-detail-body">
        <div className="srv-detail-main">
          <h2>¿Qué incluye el servicio?</h2>
          <p>Realizamos el proceso completo con certificación incluida y seguimiento posterior para garantizar el cumplimiento continuo de la normativa vigente.</p>
          <div className="norm-row">{srv.norms.map(n => <span key={n} className="norm-chip">{n}</span>)}</div>
          <ul className="checklist">
            {srv.items.map((item, i) => (
              <li key={i}>
                <span className="check-ico">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <Link to="/contacto" className="btn btn-primary btn-lg">Solicitar auditoría gratuita</Link>
        </div>

        <aside className="srv-sidebar">
          <div className="sidebar-form card">
            <h3>Contacto directo</h3>
            <p>Le respondemos en menos de 24 h</p>
            <div className="form-group">
              <label className="form-label">Nombre completo</label>
              <input className="form-input" type="text" placeholder="Juan García" />
            </div>
            <div className="form-group">
              <label className="form-label">Empresa</label>
              <input className="form-input" type="text" placeholder="Mi Empresa S.L." />
            </div>
            <div className="form-group">
              <label className="form-label">Correo electrónico</label>
              <input className="form-input" type="email" placeholder="juan@empresa.com" />
            </div>
            <div className="form-group">
              <label className="form-label">Teléfono</label>
              <input className="form-input" type="tel" placeholder="+34 600 000 000" />
            </div>
            <div className="form-group">
              <label className="form-label">Tipo de instalación</label>
              <select className="form-select">
                <option>Seleccionar...</option>
                <option>Edificio corporativo</option>
                <option>Hospital / Clínica</option>
                <option>Centro comercial</option>
                <option>Industria</option>
                <option>Otro</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Descripción</label>
              <textarea className="form-textarea" placeholder="Cuéntenos sobre su instalación..."></textarea>
            </div>
            <button className="btn btn-primary btn-full">Enviar consulta</button>
          </div>
        </aside>
      </div>
      <Footer />
    </div>
  )
}
