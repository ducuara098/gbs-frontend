# Grupo GBS · Frontend React

Sitio web corporativo completo con panel de administración.

## 🚀 Cómo arrancar

```bash
# 1. Instalar dependencias
npm install

# 2. Servidor de desarrollo (abre en http://localhost:5173)
npm run dev

# 3. Build para producción
npm run build
```

## 📁 Estructura del proyecto

```
src/
├── components/
│   ├── Navbar.jsx / Navbar.css
│   └── Footer.jsx / Footer.css
├── pages/
│   ├── Home.jsx / Home.css       → Página principal
│   ├── Servicios.jsx / .css      → Lista y detalle de servicios
│   └── Pages.jsx / Pages.css    → Nosotros, Contacto, Login, Admin
├── styles/
│   └── global.css                → Variables y estilos globales
├── App.jsx                       → Rutas principales
└── main.jsx                      → Entrada de la app
```

## 🔗 Rutas disponibles

| Ruta | Descripción |
|------|-------------|
| `/` | Página principal |
| `/servicios` | Lista de servicios |
| `/servicios/:slug` | Detalle de servicio |
| `/nosotros` | Quiénes somos |
| `/contacto` | Formulario de contacto |
| `/login` | Login administrador |
| `/admin` | Panel con métricas |

## 🛠️ Stack

- **React 18** + React Router 6
- **Vite** (dev server + build)
- **Recharts** (gráficas del panel admin)
- **Google Fonts** DM Sans + DM Serif Display

## 🌐 Deploy gratuito (Vercel)

1. Sube el proyecto a GitHub
2. Entra a vercel.com → Import Project
3. Selecciona el repo → Deploy
4. ¡Listo! URL automática en segundos.
