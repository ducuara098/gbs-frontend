import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts'
import Footer from '../components/Footer'
import './Pages.css'

// ====== NOSOTROS ======
const timeline = [
  { year: '1995', desc: 'Fundación del grupo con foco en mantenimiento de climatización industrial.' },
  { year: '2003', desc: 'Expansión hacia tratamientos biológicos y control de legionella tras el RD 865/2003.' },
  { year: '2008', desc: 'Obtención de certificaciones ISO 9001 e ISO 14001. Creación de la división de auditorías.' },
  { year: '2015', desc: 'Lanzamiento del servicio de calidad del aire interior según norma UNE 171330.' },
  { year: '2025', desc: 'Grupo consolidado con tres empresas especializadas y presencia nacional.' },
]
const valores = [
  { icon: '🛡️', title: 'Seguridad ante todo', desc: 'Trabajamos bajo los más estrictos protocolos de seguridad y normativa vigente.' },
  { icon: '✅', title: 'Calidad certificada', desc: 'Certificaciones ISO 9001, ISO 14001 y cumplimiento RITE en todos nuestros servicios.' },
  { icon: '⏱️', title: 'Respuesta 24/7', desc: 'Disponibilidad total para emergencias y servicios de guardia en instalaciones críticas.' },
  { icon: '🔬', title: 'Innovación continua', desc: 'Incorporamos las últimas tecnologías de monitorización y diagnóstico predictivo.' },
]

export function NosotrosPage() {
  return (
    <div className="animate-fade-in">
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link to="/">Inicio</Link> › <span>Quiénes somos</span></div>
          <h1 className="page-hero-title">Casi 30 años protegiendo instalaciones críticas</h1>
          <p className="page-hero-desc">Grupo GBS es un grupo empresarial multidisciplinar especializado en servicios técnicos avanzados para entornos de alta exigencia.</p>
        </div>
      </div>
      <div className="container nos-grid">
        <div className="nos-text">
          <h2>Nuestra misión</h2>
          <p>Proteger la continuidad operativa de nuestros clientes, prevenir riesgos sanitarios y minimizar paradas no planificadas mediante soluciones técnicas integrales y certificadas.</p>
          <p>En Grupo GBS no solo mantenemos instalaciones: cuidamos la salud de los espacios, la seguridad de las personas y la rentabilidad de las operaciones.</p>
          <div className="valores-grid">
            {valores.map(v => (
              <div key={v.title} className="valor-card card">
                <div className="valor-icon">{v.icon}</div>
                <div><h4>{v.title}</h4><p>{v.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
        <div className="nos-timeline">
          <div className="eyebrow" style={{ marginBottom: 20 }}>Trayectoria</div>
          {timeline.map((t, i) => (
            <div key={t.year} className="tl-item">
              <div className="tl-dot" />
              <div className="tl-year">{t.year}</div>
              <div className="tl-desc">{t.desc}</div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

// ====== CONTACTO ======
export function ContactoPage() {
  return (
    <div className="animate-fade-in">
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb"><Link to="/">Inicio</Link> › <span>Contacto</span></div>
          <h1 className="page-hero-title">Hablemos de su instalación</h1>
          <p className="page-hero-desc">Nuestro equipo técnico le asesorará sin compromiso. Respuesta garantizada en menos de 24 horas.</p>
        </div>
      </div>
      <div className="container contact-grid">
        <div className="card contact-form-card">
          <h2>Envíenos su consulta</h2>
          <div className="form-2col">
            <div className="form-group"><label className="form-label">Nombre completo</label><input className="form-input" placeholder="Juan García" /></div>
            <div className="form-group"><label className="form-label">Empresa</label><input className="form-input" placeholder="Mi Empresa S.L." /></div>
          </div>
          <div className="form-2col">
            <div className="form-group"><label className="form-label">Correo electrónico</label><input className="form-input" type="email" placeholder="juan@empresa.com" /></div>
            <div className="form-group"><label className="form-label">Teléfono</label><input className="form-input" type="tel" placeholder="+34 600 000 000" /></div>
          </div>
          <div className="form-group">
            <label className="form-label">Servicio de interés</label>
            <select className="form-select">
              <option>Seleccionar servicio...</option>
              <option>Calidad del aire interior</option>
              <option>Mantenimiento mecánico</option>
              <option>Control de legionella</option>
              <option>Auditoría RITE</option>
              <option>Consultoría técnica</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Mensaje</label>
            <textarea className="form-textarea" style={{ height: 100 }} placeholder="Describa su instalación o necesidad técnica..."></textarea>
          </div>
          <button className="btn btn-primary btn-lg btn-full">Enviar consulta</button>
        </div>
        <div className="contact-info">
          {[
            { icon: '📞', title: 'Teléfono', detail: '+34 900 000 000', sub: 'Atención 24/7 para emergencias' },
            { icon: '📧', title: 'Correo electrónico', detail: 'info@gbs.group', sub: 'Respuesta en menos de 24h' },
            { icon: '📍', title: 'Sede central', detail: 'Madrid, España', sub: 'Cobertura a nivel nacional' },
          ].map(c => (
            <div key={c.title} className="card info-card">
              <div className="info-icon">{c.icon}</div>
              <h4>{c.title}</h4>
              <div className="info-detail">{c.detail}</div>
              <div className="info-sub">{c.sub}</div>
            </div>
          ))}
          <div className="card info-highlight">
            <div style={{ fontWeight: 600, color: 'var(--green)', marginBottom: 4 }}>Respuesta garantizada</div>
            <div style={{ fontSize: 13, color: 'var(--green-dark)' }}>Respondemos todas las consultas en un máximo de 24 horas laborables.</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

// ====== LOGIN ======
export function LoginPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    navigate('/admin')
  }

  return (
    <div className="login-page animate-fade-in">
      <div className="login-card card">
        <div className="login-header">
          <div className="login-icon">🔐</div>
          <div>
            <div className="login-title">Panel de administración</div>
            <div className="login-sub">Acceso restringido · Solo personal autorizado</div>
          </div>
        </div>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label className="form-label">Correo electrónico</label>
            <input className="form-input" type="email" placeholder="admin@gbs.group" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label className="form-label">Contraseña</label>
            <input className="form-input" type="password" placeholder="••••••••" value={pass} onChange={e => setPass(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-primary btn-full" style={{ marginTop: 4 }}>Acceder al panel</button>
        </form>
        <div className="login-note">🔒 Cifrado JWT · Conexión HTTPS · Sesión segura</div>
      </div>
    </div>
  )
}

// ====== ADMIN ======
const visitData = [
  { day: 'L1', visits: 48, pages: 142 }, { day: 'M1', visits: 62, pages: 198 },
  { day: 'X1', visits: 38, pages: 110 }, { day: 'J1', visits: 75, pages: 240 },
  { day: 'V1', visits: 68, pages: 215 }, { day: 'L2', visits: 82, pages: 270 },
  { day: 'M2', visits: 55, pages: 174 }, { day: 'X2', visits: 71, pages: 228 },
  { day: 'J2', visits: 80, pages: 262 }, { day: 'V2', visits: 94, pages: 310 },
  { day: 'L3', visits: 66, pages: 210 }, { day: 'M3', visits: 85, pages: 272 },
  { day: 'X3', visits: 59, pages: 188 }, { day: 'J3', visits: 78, pages: 250 },
]

const services_data = [
  { name: 'Calidad del aire', pct: 87 }, { name: 'Mant. mecánico', pct: 64 },
  { name: 'Legionella', pct: 51 }, { name: 'Auditoría RITE', pct: 38 }, { name: 'Consultoría', pct: 22 },
]

const traffic = [
  { src: 'Búsqueda orgánica (Google)', pct: '51%' }, { src: 'Acceso directo', pct: '21%' },
  { src: 'LinkedIn', pct: '13%' }, { src: 'Referidos', pct: '9%' },
  { src: 'Email marketing', pct: '4%' }, { src: 'Otros', pct: '2%' },
]

const pages_data = [
  { page: '/calidad-del-aire-interior', visits: 541, pct: '23.1%', trend: '+18%', up: true },
  { page: '/inicio', visits: 498, pct: '21.3%', trend: '+11%', up: true },
  { page: '/mantenimiento-climatizacion', visits: 312, pct: '13.3%', trend: '+5%', up: true },
  { page: '/legionella', visits: 274, pct: '11.7%', trend: '−2%', up: false },
  { page: '/contacto', visits: 261, pct: '11.2%', trend: '+31%', up: true },
  { page: '/auditoria-rite', visits: 198, pct: '8.5%', trend: '+7%', up: true },
]

const leads = [
  { name: 'Carlos Méndez · Hospital La Paz', service: 'Calidad del aire interior', time: 'hace 2h', isNew: true },
  { name: 'Ana Torres · Centro Comercial', service: 'Mantenimiento mecánico', time: 'hace 5h', isNew: true },
  { name: 'Inversiones Iberia S.L.', service: 'Auditoría RITE', time: 'hace 1 día', isNew: false },
  { name: 'Hoteles Meliá · Dir. técnica', service: 'Legionella y CAI', time: 'hace 2 días', isNew: false },
  { name: 'Aeropuerto Adolfo Suárez', service: 'Consultoría técnica', time: 'hace 3 días', isNew: false },
]

const metrics = [
  { label: 'Visitas totales', value: '2,341', delta: '▲ +14%', up: true },
  { label: 'Páginas vistas', value: '7,820', delta: '▲ +9%', up: true },
  { label: 'Consultas recibidas', value: '47', delta: '▲ +22%', up: true },
  { label: 'Tasa conversión', value: '2.0%', delta: '▼ −0.1%', up: false },
]

const tabs = ['Dashboard', 'Visitas', 'Servicios', 'Leads']
const menuIcons = ['⊞', '📈', '⚙️', '👥']

export function AdminPage() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="admin-layout animate-fade-in">
      <aside className="admin-sidebar">
        <div className="admin-brand">
          <div className="admin-brand-name">Grupo GBS</div>
          <div className="admin-brand-role">Panel administrativo</div>
        </div>
        <nav className="admin-nav">
          {tabs.map((t, i) => (
            <button key={t} className={`admin-nav-item ${activeTab === i ? 'active' : ''}`} onClick={() => setActiveTab(i)}>
              <span>{menuIcons[i]}</span> {t}
            </button>
          ))}
        </nav>
        <div className="admin-nav-footer">
          <button className="admin-nav-item" onClick={() => navigate('/login')}>
            <span>⬅</span> Cerrar sesión
          </button>
          <Link to="/" className="admin-nav-item" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8, color: 'var(--gray-600)' }}>
            <span>🌐</span> Ver sitio
          </Link>
        </div>
      </aside>

      <main className="admin-main">
        {/* DASHBOARD */}
        {activeTab === 0 && (
          <div className="animate-fade-in">
            <div className="admin-topbar">
              <div><div className="admin-title">Dashboard</div><div className="admin-subtitle">Resumen de actividad · Últimos 30 días</div></div>
              <select className="period-select"><option>Últimos 30 días</option><option>Últimos 7 días</option><option>Este año</option></select>
            </div>
            <div className="metrics-grid">
              {metrics.map(m => (
                <div key={m.label} className="metric-card">
                  <div className="metric-label">{m.label}</div>
                  <div className="metric-value">{m.value}</div>
                  <div className={`metric-delta ${m.up ? '' : 'neg'}`}>{m.delta}</div>
                </div>
              ))}
            </div>
            <div className="chart-card">
              <div className="chart-head">
                <div className="chart-title">Visitas diarias (últimas 2 semanas)</div>
                <div className="chart-legend">
                  <span><span className="leg-dot" style={{ background: 'var(--green-light)' }} /> Visitas</span>
                  <span><span className="leg-dot" style={{ background: 'var(--green-mid)' }} /> Páginas</span>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={180}>
                <LineChart data={visitData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--gray-100)" />
                  <XAxis dataKey="day" tick={{ fontSize: 11, fill: 'var(--gray-400)' }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 11, fill: 'var(--gray-400)' }} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: '1px solid var(--gray-200)' }} />
                  <Line type="monotone" dataKey="pages" stroke="var(--green-mid)" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="visits" stroke="var(--green-light)" strokeWidth={2.5} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="two-charts">
              <div className="chart-card">
                <div className="chart-title" style={{ marginBottom: 16 }}>Servicios más consultados</div>
                {services_data.map(s => (
                  <div key={s.name} className="rank-row">
                    <span className="rank-name">{s.name}</span>
                    <div className="rank-track"><div className="rank-fill" style={{ width: `${s.pct}%` }} /></div>
                    <span className="rank-pct">{s.pct}%</span>
                  </div>
                ))}
              </div>
              <div className="chart-card">
                <div className="chart-title" style={{ marginBottom: 16 }}>Origen del tráfico</div>
                {traffic.map(t => (
                  <div key={t.src} className="traffic-row">
                    <span className="traffic-src">{t.src}</span>
                    <span className="traffic-pill">{t.pct}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="chart-card">
              <div className="chart-title" style={{ marginBottom: 14 }}>Páginas más visitadas</div>
              <table className="pages-table">
                <thead><tr><th>Página</th><th>Visitas</th><th>% del total</th><th>Tendencia</th></tr></thead>
                <tbody>
                  {pages_data.map(p => (
                    <tr key={p.page}>
                      <td className="page-path">{p.page}</td>
                      <td>{p.visits}</td>
                      <td>{p.pct}</td>
                      <td className={p.up ? 'trend-up' : 'trend-dn'}>{p.trend}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* VISITAS */}
        {activeTab === 1 && (
          <div className="animate-fade-in">
            <div className="admin-topbar"><div><div className="admin-title">Análisis de visitas</div><div className="admin-subtitle">Desglose detallado del tráfico web</div></div></div>
            <div className="metrics-grid">
              {[{ label: 'Usuarios únicos', value: '1,847', delta: '▲ +12%', up: true }, { label: 'Sesiones', value: '2,341', delta: '▲ +14%', up: true }, { label: 'Duración media', value: '2m 34s', delta: '▲ +8s', up: true }, { label: 'Tasa de rebote', value: '38%', delta: '▼ −2%', up: false }].map(m => (
                <div key={m.label} className="metric-card"><div className="metric-label">{m.label}</div><div className="metric-value">{m.value}</div><div className={`metric-delta ${m.up ? '' : 'neg'}`}>{m.delta}</div></div>
              ))}
            </div>
            <div className="chart-card">
              <div className="chart-title" style={{ marginBottom: 16 }}>Visitas por día de la semana</div>
              <ResponsiveContainer width="100%" height={180}>
                <BarChart data={visitData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--gray-100)" vertical={false} />
                  <XAxis dataKey="day" tick={{ fontSize: 11, fill: 'var(--gray-400)' }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 11, fill: 'var(--gray-400)' }} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: '1px solid var(--gray-200)' }} />
                  <Bar dataKey="visits" fill="var(--green-light)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="two-charts">
              <div className="chart-card">
                <div className="chart-title" style={{ marginBottom: 14 }}>Por dispositivo</div>
                {[{ n: 'Escritorio', p: 58 }, { n: 'Móvil', p: 35 }, { n: 'Tablet', p: 7 }].map(d => (
                  <div key={d.n} className="rank-row"><span className="rank-name">{d.n}</span><div className="rank-track"><div className="rank-fill" style={{ width: `${d.p}%` }} /></div><span className="rank-pct">{d.p}%</span></div>
                ))}
              </div>
              <div className="chart-card">
                <div className="chart-title" style={{ marginBottom: 14 }}>País de origen</div>
                {[{ s: 'España', p: '78%' }, { s: 'México', p: '7%' }, { s: 'Colombia', p: '5%' }, { s: 'Argentina', p: '4%' }, { s: 'Otros', p: '6%' }].map(t => (
                  <div key={t.s} className="traffic-row"><span className="traffic-src">{t.s}</span><span className="traffic-pill">{t.p}</span></div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SERVICIOS */}
        {activeTab === 2 && (
          <div className="animate-fade-in">
            <div className="admin-topbar"><div><div className="admin-title">Servicios consultados</div><div className="admin-subtitle">Qué buscan los visitantes</div></div></div>
            <div className="metrics-grid">
              {[{ label: 'Servicio #1', value: 'Calidad del aire', delta: '541 visitas', up: true }, { label: 'Clicks a contacto', value: '312', delta: '▲ +18%', up: true }, { label: 'Formularios', value: '47', delta: '▲ +22%', up: true }, { label: 'Tasa de interés', value: '86%', delta: '▲ +3%', up: true }].map(m => (
                <div key={m.label} className="metric-card"><div className="metric-label">{m.label}</div><div className="metric-value" style={{ fontSize: m.value.length > 6 ? 16 : undefined }}>{m.value}</div><div className="metric-delta">{m.delta}</div></div>
              ))}
            </div>
            <div className="chart-card">
              <div className="chart-title" style={{ marginBottom: 16 }}>Ranking de servicios por interés</div>
              {services_data.map(s => (
                <div key={s.name} className="rank-row" style={{ marginBottom: 12 }}>
                  <span className="rank-name">{s.name}</span>
                  <div className="rank-track"><div className="rank-fill" style={{ width: `${s.pct}%` }} /></div>
                  <span className="rank-pct">{s.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* LEADS */}
        {activeTab === 3 && (
          <div className="animate-fade-in">
            <div className="admin-topbar"><div><div className="admin-title">Leads recibidos</div><div className="admin-subtitle">Formularios de contacto · Últimos 30 días</div></div></div>
            <div className="metrics-grid">
              {[{ label: 'Total leads', value: '47', delta: '▲ +22%', up: true }, { label: 'Sin responder', value: '8', delta: 'Pendientes', up: false }, { label: 'Respondidos', value: '39', delta: '83% tasa', up: true }, { label: 'Convertidos', value: '12', delta: '▲ 25.5%', up: true }].map(m => (
                <div key={m.label} className="metric-card"><div className="metric-label">{m.label}</div><div className="metric-value" style={{ color: m.label === 'Sin responder' ? 'var(--danger)' : undefined }}>{m.value}</div><div className={`metric-delta ${m.up ? '' : 'neg'}`}>{m.delta}</div></div>
              ))}
            </div>
            <div className="chart-card">
              <div className="chart-title" style={{ marginBottom: 16 }}>Leads recientes</div>
              <div className="leads-list">
                {leads.map((l, i) => (
                  <div key={i} className="lead-row">
                    <div>
                      <div className="lead-name">{l.name}</div>
                      <div className="lead-meta">{l.service} · {l.time}</div>
                    </div>
                    <span className={`badge ${l.isNew ? 'badge-green' : 'badge-gray'}`}>{l.isNew ? 'Nuevo' : 'Leído'}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
