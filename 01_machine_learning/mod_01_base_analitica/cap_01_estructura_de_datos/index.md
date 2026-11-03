---
title: "Capítulo 1: ¿Cómo se estructuran los datos?"
---

Antes de entrenar cualquier modelo hay que **entender los datos**: de dónde vienen, cómo están
estructurados, qué tipos contienen y qué tan confiables son. Este capítulo construye esa base.

## Objetivos de aprendizaje

- Reconocer filas, columnas y tipos de variables en un dataset.
- Generar datos propios y cargarlos desde distintas fuentes (formularios, APIs, archivos, librerías).
- Hacer una primera auditoría de calidad: nulos, duplicados y cardinalidad.

## 1. Teoría y presentaciones

### ¿Cómo se estructuran los datos?

:::{figure} teoria_y_papers/imagenes/como_se_estructuran_los_datos.svg
:alt: Diapositiva ¿Cómo se estructuran los datos?
:width: 100%
:::

### Presentación: Día 1 · Datos y EDA

:::{iframe} https://drive.google.com/file/d/1CPPrzufI0JH7NIGSwDh5-Fb1WcRDjOxk/preview
:width: 100%
:::

:::{div}
:class: botones-clase
[Descargar presentación (PDF)](https://drive.google.com/uc?export=download&id=1CPPrzufI0JH7NIGSwDh5-Fb1WcRDjOxk)
[Carpeta de teoría en Drive](https://drive.google.com/drive/folders/1Dr9QK_-6XnEnBXalpJNbOe8CzJmj2kad)
:::

### Lecturas y recursos

- [Artificial Analysis](https://artificialanalysis.ai/es?capability-index=finance-and-accounting) — comparativa independiente de modelos de IA: calidad, velocidad y precio medidos con datos.

## 2. Actividades de la clase

:::{div}
:class: botones-clase
[Carpeta de actividades en Drive](https://drive.google.com/drive/folders/1QQeNzCqqqnezO5XPQsmkZLxIadwz4Oto)
:::

### Genera tus propios datos

Los datos no siempre se descargan: también se **crean**. Cada respuesta a este formulario es una
**fila** y cada pregunta es una **columna** de un dataset que analizaremos en clase.

::::{div}
:class: interactivo interactivo-alto
:::{iframe} https://docs.google.com/forms/d/e/1FAIpQLSfO-bddKzF7FuGt-O7NoBmnt6Vzv9UOUrknuGTbYGjldEe_8A/viewform?embedded=true
:width: 100%
:::
::::

:::{div}
:class: botones-clase
[Abrir formulario en pestaña nueva](https://docs.google.com/forms/d/e/1FAIpQLSfO-bddKzF7FuGt-O7NoBmnt6Vzv9UOUrknuGTbYGjldEe_8A/viewform)
:::

Antes de mirar las respuestas, piensa qué **tipo de variable** genera cada pregunta:

| Pregunta | Tipo de variable | Qué esperar al analizarla |
|----------|------------------|---------------------------|
| ¿Cuál es tu edad? | Numérica discreta | Rango, media y posibles errores de digitación |
| ¿En qué ciudad o barrio te encuentras? | Categórica nominal | Texto libre: la misma respuesta escrita de varias formas |
| ¿Cuántas horas dormiste anoche? | Numérica continua | Distribución y valores imposibles (más de 24) |
| Medio de transporte principal | Categórica nominal | Frecuencias por categoría |
| Nivel actual de programación | Categórica ordinal | Escala con orden: 1 < 2 < 3… |
| ¿Cuánto crees que mide el TL en cm? | Numérica continua | Valores atípicos y la "sabiduría de la multitud" |

Del formulario a pandas hay tres pasos: **Forms › Respuestas › Vincular con Hojas de cálculo**,
luego **Archivo › Compartir › Publicar en la web › CSV**, y por último:

```python
import pandas as pd

url = 'https://docs.google.com/spreadsheets/d/e/ID_PUBLICADO/pub?output=csv'
respuestas = pd.read_csv(url)
respuestas.head()
```

## 3. Código y actividades

- [Código de la sesión](codigo_de_la_sesion.md) — notebooks de la clase en Colab y Kaggle.
- [Actividades a presentar](actividades_a_presentar.md) — entregables del capítulo.
