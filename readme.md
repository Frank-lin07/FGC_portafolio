# Portafolio digital: Franklin Grisales Castrillón

Primer avance del portafolio profesional de Franklin Grisales Castrillón,
Diseñador Crossmedia y Realizador Audiovisual. Proyecto del Momento
Evaluativo 2 de Aplicaciones móviles y web (UCC), Ruta B: desarrollo a medida.

- **Sitio publicado:** (https://portafoliofgc.netlify.app)
- **Prototipo y Design System (Figma):** (https://www.figma.com/design/qSoP1aijzwWpbzeHirBcEX/FGC_Portafolio?node-id=1-3&t=tX74RCfZB8lxAaYx-1)

## Tecnologías

- HTML5, CSS3 y JavaScript.
- Bootstrap 5.3 (por CDN): cuadrícula, navbar colapsable y utilidades.
- Tipografías de Google Fonts: Montserrat (títulos) y Spectral (texto).
- Publicación en Netlify.

**Justificación de la ruta:** elegí el desarrollo a medida porque permite que
los tokens del Design System (variables CSS) controlen todo el sitio. Bootstrap
aporta la estructura y el responsive; la identidad visual es propia.

## Estructura

```
├── index.html        Inicio
├── proyectos.html    Proyectos (5 casos de estudio)
├── perfil.html       Sobre mí y contacto
├── css/
│   ├── tokens.css    Design tokens: colores, tipografía, espaciado, bordes
│   └── estilos.css   Componentes y estilos de las páginas
├── js/main.js        Validación del formulario de contacto
└── imgs/             Monograma FGC, ondas concéntricas y foto
```

## Design System y Atomic Design

Los tokens de `tokens.css` son los mismos de las variables de Figma.

| Nivel | Componentes (Figma y código) |
|---|---|
| Átomos | Botón primario y secundario, chip de habilidad, enlace, campo |
| Moléculas | Campo con etiqueta y con error, tarjeta de proyecto, caso de estudio, bloque de método |
| Organismos | Navegación, footer, formulario de contacto, sección de proyectos |
| Plantillas | Estructura común: navegación, contenido, footer |
| Páginas | Inicio, Proyectos, Sobre mí y contacto |

## Cómo ejecutarlo

Es un sitio estático: abre `index.html` en el navegador, o usa la extensión
Live Server en VS Code. No requiere instalación.

## Alcance y pendientes (Momento 3)

- El formulario valida en el navegador pero no envía mensajes (sin backend).
- Las imágenes de los proyectos son marcadores grises; faltan capturas, fotos y renders.
- Enlaces a Behance y LinkedIn: aún no existen.
- Monograma con corte ondulado y uso de las ondas concéntricas como fondo.
- Reproductores de video y audio de los proyectos.