import { Link } from 'react-router-dom'
import './Home.css'

const services = [
  { icon: '🌬️', title: 'Calidad del aire interior', desc: 'Auditoría CAI según UNE 171330. Medición de CO₂, VOC, partículas y parámetros microbiológicos.', to: '/servicios/calidad-aire' },
  { icon: '⚙️', title: 'Mantenimiento mecánico', desc: 'Mantenimiento preventivo y correctivo de sistemas HVAC industriales y de refrigeración.', to: '/servicios' },
  { icon: '🧪', title: 'Tratamiento biológico', desc: 'Control de legionella, desinfección de conductos y tratamiento químico de aguas.', to: '/servicios' },
  { icon: '📋', title: 'Auditoría e inspección', desc: 'Certificaciones RITE, informes periciales y auditorías para cumplimiento legal.', to: '/servicios' },
  { icon: '🛡️', title: 'Prevención de riesgos', desc: 'Evaluación de riesgos sanitarios, planes de emergencia y protocolos de bioseguridad.', to: '/servicios' },
  { icon: '📚', title: 'Consultoría técnica', desc: 'Asesoramiento especializado en optimización energética y gestión de instalaciones.', to: '/servicios' },
]

const empresas = [
  { abbr: 'DIM', name: 'Mantenimiento Integral', desc: 'Climatización industrial, refrigeración y sistemas HVAC para instalaciones de alta exigencia.' },
  { abbr: 'HCA', name: 'Sanidad Medioambiental', desc: 'Tratamientos biológicos, desinfección y control microbiológico de ambientes y aguas.' },
  { abbr: 'TIG', name: 'Intermediación Global', desc: 'Auditoría normativa, inspección de instalaciones y certificación de cumplimiento RITE.' },
  { abbr: 'PGI', name: 'Proyectos de Inversión', desc: 'Gestión y desarrollo de proyectos de inversión en instalaciones críticas y edificios corporativos.' },
]

const sectores = ['Edificios corporativos', 'Hospitales y clínicas', 'Industria alimentaria', 'Retail y centros comerciales', 'Transporte y aeropuertos', 'Hoteles y hospitality', 'Centros de datos', 'Laboratorios farmacéuticos', 'Instalaciones públicas']

const certs = ['ISO 9001:2015', 'ISO 14001', 'RITE 2007', 'UNE 171330', 'UNE 100012', 'RD 865/2003']

export default function Home() {
  return (
    <div className="home animate-fade-in">

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg-lines" aria-hidden="true">
          {[...Array(6)].map((_, i) => <div key={i} className="hero-line" style={{ animationDelay: `${i * 0.15}s` }} />)}
        </div>
        <div className="container hero-content">
          <div className="hero-badge badge badge-green animate-fade-up">
            <span className="badge-dot" />
            Grupo empresarial · 30 años de experiencia
          </div>
          <h1 className="hero-title animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Instalaciones críticas<br />
            bajo <em>control total</em>
          </h1>
          <p className="hero-desc animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Integramos mantenimiento mecánico, tratamiento biológico y auditoría normativa para garantizar entornos seguros, eficientes y conformes en edificios corporativos, industria y retail.
          </p>
          <div className="hero-actions animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Link to="/servicios" className="btn btn-primary btn-lg">Explorar servicios</Link>
            <Link to="/contacto" className="btn btn-outline btn-lg">Hablar con un experto</Link>
          </div>
          <div className="hero-empresas animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <span className="hero-empresas-label">Empresas del grupo:</span>
            {empresas.map(e => <span key={e.abbr} className="hero-empresa-chip">{e.abbr} · {e.name.split(' ')[0]}</span>)}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-strip">
        {[
          { n: '30+', l: 'Años en el sector' },
          { n: '+800', l: 'Proyectos ejecutados' },
          { n: '4', l: 'Empresas especializadas' },
          { n: '100%', l: 'Normativa cumplida' },
        ].map(s => (
          <div key={s.n} className="stat-item">
            <div className="stat-number">{s.n}</div>
            <div className="stat-label">{s.l}</div>
          </div>
        ))}
      </section>

      {/* SERVICES */}
      <section className="section-pad">
        <div className="container">
          <div className="eyebrow">Servicios principales</div>
          <h2 className="section-title">Soluciones técnicas integrales</h2>
          <p className="section-desc" style={{ marginBottom: 36 }}>Cobertura completa del ciclo de vida de sus instalaciones de climatización y calidad ambiental.</p>
          <div className="services-grid">
            {services.map((s, i) => (
              <Link key={i} to={s.to} className="service-card card card-hover" style={{ animationDelay: `${i * 0.07}s` }}>
                <div className="service-icon">{s.icon}</div>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc">{s.desc}</p>
                <div className="service-arrow">Ver servicio →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* EMPRESAS */}
      <section className="section-alt section-pad">
        <div className="container">
          <div className="eyebrow">Grupo empresarial</div>
          <h2 className="section-title">Cuatro empresas, una misión</h2>
          <p className="section-desc" style={{ marginBottom: 36 }}>Cuatro empresas especializadas que trabajan de forma coordinada para ofrecer cobertura 360° de sus instalaciones.</p>
          <div className="empresas-grid">
            {empresas.map(e => (
              <div key={e.abbr} className="empresa-card">
                <div className="empresa-abbr">{e.abbr}</div>
                <div className="empresa-name">{e.name}</div>
                <p className="empresa-desc">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTORES */}
      <section className="section-pad">
        <div className="container">
          <div className="eyebrow">Sectores</div>
          <h2 className="section-title">Dónde trabajamos</h2>
          <p className="section-desc" style={{ marginBottom: 28 }}>Presencia en los sectores más exigentes en materia de calidad ambiental y seguridad.</p>
          <div className="sector-tags">
            {sectores.map(s => <span key={s} className="sector-tag">{s}</span>)}
          </div>
        </div>
      </section>

      {/* CERTIFICACIONES */}
      <section className="section-alt section-pad">
        <div className="container">
          <div className="eyebrow">Certificaciones</div>
          <h2 className="section-title">Avalados por los máximos estándares</h2>
          <div className="cert-row">
            {certs.map(c => (
              <div key={c} className="cert-chip">
                <span className="cert-dot" />
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="section-pad">
        <div className="container">
          <div className="cta-banner">
            <div className="cta-text">
              <h3>¿Necesita una auditoría de su instalación?</h3>
              <p>Nuestro equipo técnico le responde en menos de 24 horas</p>
            </div>
            <Link to="/contacto" className="btn btn-white btn-lg">Solicitar auditoría gratuita</Link>
          </div>
        </div>
      </section>

    </div>
  )
}
