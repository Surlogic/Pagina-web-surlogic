# SurLogic - Enterprise Web Platform

Web corporativa multipágina y multiidioma para SurLogic, software factory especializada en sistemas a medida, automatización empresarial e integraciones complejas.

## Stack Tecnológico

- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Internacionalización**: next-intl
- **Deploy**: Vercel-ready

## Estructura del Proyecto

```
surlogic-web/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── servicios/
│   │   │   ├── page.tsx
│   │   │   ├── software-a-medida/
│   │   │   ├── automatizaciones/
│   │   │   ├── integraciones/
│   │   │   └── aplicaciones/
│   │   ├── casos-de-exito/
│   │   ├── nosotros/
│   │   └── contacto/
│   ├── globals.css
│   └── layout.tsx
├── components/
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   └── home/
│       ├── Hero.tsx
│       ├── Problems.tsx
│       ├── Services.tsx
│       ├── Methodology.tsx
│       └── CTA.tsx
├── messages/
│   ├── es.json
│   ├── en.json
│   └── pt.json
└── public/
```

## Instalación y Desarrollo

### 1. Instalar dependencias

```bash
npm install
```

### 2. Ejecutar en modo desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

### 3. Build para producción

```bash
npm run build
```

### 4. Ejecutar build de producción

```bash
npm start
```

## Deploy en Vercel

### Opción 1: Desde CLI

```bash
npm install -g vercel
vercel
```

### Opción 2: Desde GitHub

1. Subir el proyecto a GitHub
2. Importar repositorio en Vercel
3. Vercel detectará automáticamente Next.js
4. Deploy automático

### Variables de Entorno

No se requieren variables de entorno para el funcionamiento básico.

## Idiomas Soportados

- **Español** (`/es`)
- **Inglés** (`/en`)
- **Portugués** (`/pt`)

El idioma por defecto es español.

## Rutas Principales

### Español
- `/es` - Homepage
- `/es/servicios` - Servicios
- `/es/servicios/software-a-medida`
- `/es/servicios/automatizaciones`
- `/es/servicios/integraciones`
- `/es/servicios/aplicaciones`
- `/es/casos-de-exito`
- `/es/nosotros`
- `/es/contacto`

### Inglés
- `/en` - Homepage
- `/en/servicios` - Services
- (misma estructura)

### Portugués
- `/pt` - Homepage
- `/pt/servicios` - Serviços
- (misma estructura)

## Características

- ✅ Diseño oscuro profesional (azul marino)
- ✅ Responsive completo
- ✅ SEO optimizado
- ✅ Multiidioma (ES/EN/PT)
- ✅ Navegación intuitiva
- ✅ Componentes reutilizables
- ✅ TypeScript strict mode
- ✅ Performance optimizado
- ✅ Deploy-ready para Vercel

## Personalización

### Colores

Los colores principales se definen en `tailwind.config.ts`:

```typescript
colors: {
  navy: {
    50: '#e6f0ff',
    // ... hasta
    950: '#000510',
  },
}
```

### Traducciones

Editar archivos en `/messages/`:
- `es.json` - Español
- `en.json` - Inglés
- `pt.json` - Portugués

### Componentes

Los componentes están en `/components/` organizados por función.

## Próximos Pasos

- [ ] Integrar formulario de contacto con backend
- [ ] Agregar analytics (Google Analytics / Plausible)
- [ ] Implementar blog
- [ ] Agregar animaciones scroll
- [ ] Optimizar imágenes

## Soporte

Para soporte técnico, contactar a: contacto@surlogic.com
# Pagina-web-surlogic
