# NLP & Baby Steps LLMs

Plataforma guía para estudiantes no técnicos que quieren aprender NLP y LLMs paso a paso, sin perderse en teoría pesada ni en notebooks aislados.

## Visión del proyecto

Este repositorio ya no es solo un notebook de análisis de sentimiento. La idea es convertirlo en una academia liviana y pública con:

- una página inicial clara para orientarse,
- una ruta de aprendizaje por etapas,
- un Módulo 1 guiado para abrir antes del notebook,
- una guía de clase 1 para usar el sitio como recorrido completo en vivo,
- un flujo simple para medir avance y feedback,
- una página de feedback para el cierre de cada clase o módulo,
- y el notebook como laboratorio práctico.

## Cómo usar el sitio de GitHub Pages

1. Seguí la Ruta en `docs/roadmap.html`.
2. Entrá a `docs/module-1.html` para entender la base del curso.
3. Usá `docs/class-session-1.html` como guía de clase en vivo para seguir el flujo completo.
4. Abrí el notebook en [Colab](https://colab.research.google.com/github/HaroldSthid/blueprint_NLP_and_babysteps_LLMs/blob/main/NLP_LLMs_babysteps.ipynb) para ejecutarlo, o en [GitHub](https://github.com/HaroldSthid/blueprint_NLP_and_babysteps_LLMs/blob/main/NLP_LLMs_babysteps.ipynb) para leerlo.
5. Cerrá cada módulo con `docs/feedback.html`, escribí las 3 respuestas de reflexión y compartilas por el canal de la clase o con el mentor hasta que esté listo el formulario.
6. Usá la sección de seguimiento para ver cómo avanza tu progreso junto con el feedback.

> En Colab, a veces tenés que aceptar permisos o reiniciar el entorno después de instalar dependencias. Es normal.

## Estructura del repositorio

| Ruta | Propósito |
|------|-----------|
| `docs/index.html` | Landing page de la academia |
| `docs/roadmap.html` | Ruta de aprendizaje para principiantes |
| `docs/module-1.html` | Guía del primer módulo antes del notebook |
| `docs/class-session-1.html` | Guía de clase en vivo para la primera sesión |
| `docs/tracking.html` | Flujo conceptual de progreso y evaluación |
| `docs/tracking-template.csv` | Plantilla inicial para Google Sheets/AppSheet sin datos reales |
| `docs/feedback.html` | Página de feedback breve para estudiantes |
| `docs/styles.css` | Estilos compartidos del sitio |
| `docs/_config.yml` | Metadata liviana para GitHub Pages |
| `NLP_LLMs_babysteps.ipynb` | Notebook práctico principal — [Abrir en Colab](https://colab.research.google.com/github/HaroldSthid/blueprint_NLP_and_babysteps_LLMs/blob/main/NLP_LLMs_babysteps.ipynb) / [Ver en GitHub](https://github.com/HaroldSthid/blueprint_NLP_and_babysteps_LLMs/blob/main/NLP_LLMs_babysteps.ipynb) |

## Notebook + roadmap

- El notebook se usa para practicar.
- La ruta se usa para decidir qué mirar primero.
- El módulo 1 se usa para entender la idea base antes de tocar el notebook.
- Si vas a ejecutar el notebook, usá Colab; si solo querés revisarlo, usá GitHub.
- Si recién empezás, seguí este orden: Ruta → Módulo 1 → Guía de clase 1 → Notebook → Feedback → Seguimiento.
- Si ya tenés base, usá el notebook como referencia y la web como mapa de navegación.

## Tracking y feedback

El objetivo es que el progreso de estudiantes pueda registrarse con una solución simple como AppSheet + Google Sheets, sin exponer secretos ni enlaces privados en el repo. La página `docs/feedback.html` funciona como el punto de cierre de cada clase o módulo y, mientras el formulario no esté disponible, las respuestas se comparten por el canal de la clase o directamente con el mentor.

- `docs/tracking-template.csv` sirve como plantilla inicial para crear una Google Sheet.
- Los links reales al Form/AppSheet deben agregarse recién cuando existan y sean seguros para publicar.
- Si el repositorio ya tuviera analítica o tracking configurado, conviene preservarlo.
- En este estado no se detectó configuración de analítica en el repo.
- Si hace falta, la medición puede agregarse más adelante desde la Pages theme o desde la propia capa estática.

## Dataset original

El notebook actual sigue apuntando al caso IMDb de sentiment analysis como base práctica para aprender.

## Contribuir

Si querés seguir ampliando la academia, mantené los cambios pequeños y fáciles de revisar.
