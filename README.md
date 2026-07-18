# NLP & Baby Steps LLMs

Plataforma guía para estudiantes no técnicos que quieren aprender NLP y LLMs paso a paso, sin perderse en teoría pesada ni en notebooks aislados.

## Visión del proyecto

Este repositorio ya no es solo un notebook de análisis de sentimiento. La idea es convertirlo en una academia liviana y pública con:

- una página inicial clara para orientarse,
- una ruta de aprendizaje por etapas,
- un Track 2 / Ruta Purista para profundizar en fundamentos de NLP y preparación de datos,
- notebooks curados en `notebooks/track-2/` con guías de entrada,
- una guía específica de OCR con Tesseract para el notebook de extracción desde imágenes,
- una guía de tokenización y preparación lingüística para el notebook de limpieza y análisis,
- una guía de data augmentation con NLPaug ModernLab para el notebook de variaciones de texto,
- una guía de weak supervision con Snorkel Modern Colab para el notebook de reglas débiles,
- una página de cierre integrador para conectar la secuencia completa de Track 2,
- un Módulo 1 guiado para abrir antes del notebook,
- una guía de clase 1 para usar el sitio como recorrido completo en vivo,
- un flujo simple para medir avance y feedback,
- una guía para mentores con la configuración de Google Form + Google Sheets + AppSheet,
- una página de feedback para el cierre de cada clase o módulo con el Form público embebido,
- y el notebook como laboratorio práctico.

## Cómo usar el sitio de GitHub Pages

1. Seguí la Ruta en `docs/roadmap.html`.
2. Elegí Track 1: Módulo 1 o Track 2 según tu nivel e intención.
3. Entrá a `docs/module-1.html` para entender la base del curso.
4. Usá `docs/class-session-1.html` como guía de clase en vivo para seguir el flujo completo.
5. Abrí el notebook en [Colab](https://colab.research.google.com/github/HaroldSthid/blueprint_NLP_and_babysteps_LLMs/blob/main/NLP_LLMs_babysteps.ipynb) para ejecutarlo, o en [GitHub](https://github.com/HaroldSthid/blueprint_NLP_and_babysteps_LLMs/blob/main/NLP_LLMs_babysteps.ipynb) para leerlo.
6. Usá `docs/track-2.html` si querés una ruta más profunda sobre texto, datos y notebooks curados.
7. Entrá a `docs/track-2-webscraping.html` para abrir el primer notebook de Track 2 con su guía y sus enlaces directos.
8. Entrá a `docs/track-2-ocr.html` para abrir el notebook de OCR con Tesseract y su guía asociada.
9. Entrá a `docs/track-2-tokenization.html` para abrir el notebook de tokenización, stopwords, stemming, lematización y POS tagging con su guía asociada.
10. Entrá a `docs/track-2-data-augmentation.html` para abrir el notebook de data augmentation ModernLab con su guía asociada.
11. Entrá a `docs/track-2-snorkel.html` para abrir el notebook de weak supervision con Snorkel Modern Colab y su guía asociada.
12. Cerrá la secuencia de Track 2 con `docs/track-2-wrap-up.html` para integrar la ruta completa, revisar supuestos y hacer el checklist final.
13. Cerrá cada módulo con `docs/feedback.html`, completá el formulario embebido y usá el enlace de apertura en pestaña nueva si necesitás verlo aparte.
14. Usá la sección de seguimiento para ver cómo avanza tu progreso junto con el feedback.
15. Si vas a activar el flujo de mentoría, seguí `docs/appsheet-setup.html` antes de publicar la app.

> En Colab, a veces tenés que aceptar permisos o reiniciar el entorno después de instalar dependencias. Es normal.

## Estructura del repositorio

| Ruta | Propósito |
|------|-----------|
| `docs/index.html` | Landing page de la academia |
| `docs/roadmap.html` | Ruta de aprendizaje para principiantes |
| `docs/track-2.html` | Índice de Track 2 / Ruta Purista |
| `docs/track-2-webscraping.html` | Guía del primer notebook de Track 2 con enlaces a GitHub y Colab |
| `docs/track-2-tokenization.html` | Guía del notebook de tokenización, stopwords, stemming, lematización y POS tagging con enlaces a GitHub y Colab |
| `docs/track-2-ocr.html` | Guía del notebook de OCR con Tesseract y enlaces a GitHub y Colab |
| `docs/track-2-data-augmentation.html` | Guía del notebook de data augmentation con NLPaug ModernLab y enlaces a GitHub y Colab |
| `docs/track-2-snorkel.html` | Guía del notebook de weak supervision con Snorkel Modern Colab y enlaces a GitHub y Colab |
| `docs/track-2-wrap-up.html` | Página de cierre integrador con checklist y reflexión para Track 2 |
| `docs/module-1.html` | Guía del primer módulo antes del notebook |
| `docs/class-session-1.html` | Guía de clase en vivo para la primera sesión |
| `docs/tracking.html` | Flujo conceptual de progreso y evaluación |
| `docs/tracking-template.csv` | Plantilla inicial para Google Sheets/AppSheet sin datos reales |
| `docs/feedback.html` | Página de feedback breve para estudiantes con el Form público embebido |
| `docs/appsheet-setup.html` | Guía para mentores sobre Form + Sheets + AppSheet |
| `docs/styles.css` | Estilos compartidos del sitio |
| `docs/_config.yml` | Metadata liviana para GitHub Pages |
| `notebooks/track-2/` | Carpeta de notebooks curados para Track 2 |
| `NLP_LLMs_babysteps.ipynb` | Notebook práctico principal — [Abrir en Colab](https://colab.research.google.com/github/HaroldSthid/blueprint_NLP_and_babysteps_LLMs/blob/main/NLP_LLMs_babysteps.ipynb) / [Ver en GitHub](https://github.com/HaroldSthid/blueprint_NLP_and_babysteps_LLMs/blob/main/NLP_LLMs_babysteps.ipynb) |

## Notebook + roadmap

- El notebook se usa para practicar.
- La ruta se usa para decidir qué mirar primero.
- El módulo 1 se usa para entender la idea base antes de tocar el notebook.
- Track 2 se usa para profundizar en adquisición, limpieza, calidad de datos y modernización de notebooks legacy.
- Track 2 se cierra con una página integradora para conectar la secuencia completa y revisar criterios.
- Si vas a ejecutar el notebook, usá Colab; si solo querés revisarlo, usá GitHub.
- Si recién empezás, seguí este orden: Ruta → Track 1: Módulo 1 → Guía de clase 1 → Notebook → Reflexión y feedback → Progreso y feedback.
- Si ya tenés base, usá el notebook como referencia y la web como mapa de navegación.

## Tracking y feedback

El objetivo es que el progreso de estudiantes pueda registrarse con una solución simple como AppSheet + Google Sheets, sin exponer secretos ni enlaces privados en el repo. La página `docs/feedback.html` funciona como el punto de cierre de cada clase o módulo, embebe el Form público y mantiene el tracking privado en AppSheet fuera de GitHub.

- `docs/tracking-template.csv` sirve como plantilla inicial para crear una Google Sheet.
- `docs/appsheet-setup.html` documenta el flujo de mentoría y las vistas sugeridas en AppSheet.
- Los links privados de AppSheet o de la Sheet no deben publicarse en el repo; el Form público se muestra solo en `docs/feedback.html`.
- Si el repositorio ya tuviera analítica o tracking configurado, conviene preservarlo.
- En este estado no se detectó configuración de analítica en el repo.
- Si hace falta, la medición puede agregarse más adelante desde la Pages theme o desde la propia capa estática.

## Dataset original

El notebook actual sigue apuntando al caso IMDb de sentiment analysis como base práctica para aprender.

## Contribuir

Si querés seguir ampliando la academia, mantené los cambios pequeños y fáciles de revisar.
