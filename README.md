# Check-Up Empresarial — Auren México

Landing page de autodiagnóstico empresarial gratuito. En 5 minutos, mediante 20 preguntas,
el usuario obtiene un diagnóstico personalizado del nivel de salud **fiscal, legal y
corporativa** de su empresa, junto con un puntaje y alertas por área.

## ¿Qué hace?

- **Captura de leads**: formulario inicial con nombre, empresa, correo, teléfono y cargo.
- **Cuestionario**: 20 preguntas agrupadas en 6 categorías (Cumplimiento Fiscal, Estrategia
  Fiscal, Legal y Contratos, Sucesión y Patrimonio, Seguridad Social y Laboral, Gestión).
- **Resultados al instante**: puntaje de 0 a 100, nivel (Crítico → Excelente), gráfica por
  categoría y listado de alertas críticas, áreas de oportunidad y fortalezas.
- **Integraciones**:
  - Envío de respuestas a **Google Sheets** vía Google Apps Script.
  - **Meta Pixel** (Facebook) para seguimiento de conversiones y eventos del embudo.

## Estructura del proyecto

| Archivo        | Descripción                                             |
| -------------- | ------------------------------------------------------- |
| `index.html`   | Estructura de la página y scripts de tracking (Meta Pixel). |
| `styles.css`   | Todos los estilos de la interfaz.                       |
| `script.js`    | Lógica del cuestionario, cálculo del diagnóstico y envío de datos. |

## Cómo usarlo

Es un sitio estático: no requiere instalación ni servidor especial.

- **Local**: abre `index.html` en tu navegador.
- **Servidor local (recomendado)** para evitar restricciones del navegador:
  ```bash
  python3 -m http.server 8000
  # luego abre http://localhost:8000
  ```
- **Producción**: súbelo a cualquier hosting estático (GitHub Pages, Netlify, Vercel, etc.).

## Configuración

Antes de publicar, revisa estos valores:

- **Google Apps Script** — en `script.js`, la constante `GOOGLE_SCRIPT_URL` debe apuntar a
  tu endpoint de Apps Script que recibe y guarda los datos en Google Sheets.
- **Meta Pixel** — en `index.html`, el ID del pixel (`fbq('init', ...)`) debe corresponder a
  tu cuenta de Facebook Business.

## Notas

- Los datos del usuario solo se usan para generar el diagnóstico, conforme al
  [Aviso de Privacidad de Auren](https://auren.com/mx/politica-de-privacidad/).
- El cuestionario también registra el avance parcial (leads incompletos) cuando el usuario
  abandona antes de terminar.

---

Auren © 2026 — Consultoría | Auditoría | Asesoría Empresarial
