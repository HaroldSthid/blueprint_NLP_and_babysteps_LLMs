# NLP & Baby Steps LLMs

Plataforma guía para estudiantes no técnicos que quieren aprender NLP y LLMs paso a paso, sin perderse en teoría pesada ni en notebooks aislados.

## Visión del proyecto

Este repositorio ya no es solo un notebook de análisis de sentimiento. La idea es convertirlo en una academia liviana y pública con:

- una página inicial clara para orientarse,
- una ruta de aprendizaje por etapas,
- un flujo simple para medir avance y feedback,
- una página de feedback para el cierre de cada clase o módulo,
- y el notebook como laboratorio práctico.

## Cómo usar el sitio de GitHub Pages

1. Abrí la página principal del sitio publicado desde `docs/index.html`.
2. Leé el roadmap para entender el orden sugerido.
3. Entrá al notebook y ejecutá las celdas a tu ritmo.
4. Cerrá cada módulo con `docs/feedback.html`, escribí las 3 respuestas de reflexión y compartilas por el canal de la clase o con el mentor hasta que esté listo el formulario.
5. Usá la sección de tracking para entender cómo se relaciona el progreso con el feedback.

## Estructura del repositorio

| Ruta | Propósito |
|------|-----------|
| `docs/index.html` | Landing page de la academia |
| `docs/roadmap.html` | Ruta de aprendizaje para principiantes |
| `docs/tracking.html` | Flujo conceptual de progreso y evaluación |
| `docs/feedback.html` | Página de feedback breve para estudiantes |
| `docs/styles.css` | Estilos compartidos del sitio |
| `docs/_config.yml` | Metadata liviana para GitHub Pages |
| `NLP_LLMs_babysteps.ipynb` | Notebook práctico principal |

## Notebook + roadmap

- El notebook se usa para practicar.
- La roadmap se usa para decidir qué mirar primero.
- Si recién empezás, seguí el orden sugerido de la página de roadmap antes de saltar entre temas.
- Si ya tenés base, usá el notebook como referencia y la web como mapa de navegación.

## Tracking y feedback

El objetivo es que el progreso de estudiantes pueda registrarse con una solución simple como AppSheet + Google Sheets, sin exponer secretos ni enlaces privados en el repo. La página `docs/feedback.html` funciona como el punto de cierre de cada clase o módulo y, mientras el formulario no esté disponible, las respuestas se comparten por el canal de la clase o directamente con el mentor.

- Si el repositorio ya tuviera analítica o tracking configurado, conviene preservarlo.
- En este estado no se detectó configuración de analítica en el repo.
- Si hace falta, la medición puede agregarse más adelante desde la Pages theme o desde la propia capa estática.

## Dataset original

El notebook actual sigue apuntando al caso IMDb de sentiment analysis como base práctica para aprender.

## Contribuir

Si querés seguir ampliando la academia, mantené los cambios pequeños y fáciles de revisar.
