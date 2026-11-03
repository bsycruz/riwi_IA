---
title: "Capítulo 2: ¿Qué es un modelo?"
---

Un **modelo** es lo que una máquina aprende a partir de los datos: una regla que, con ejemplos
del pasado, permite predecir casos nuevos. En este capítulo lo construimos primero con intuición
y después con una herramienta real.

## Objetivos de aprendizaje

- Explicar qué es un modelo con un ejemplo cotidiano.
- Distinguir características (lo que vemos) de etiquetas (la respuesta correcta).
- Entrenar un modelo propio sin escribir código y observar cómo predice.

## 1. Teoría y presentaciones

### Presentación: ¿Qué es un modelo?

:::{iframe} https://docs.google.com/presentation/d/10JLMArjn4YEWFA2YuAwn63luXcHlSDor0RJ7Jru_Q60/embed?start=false&loop=false&delayms=3000
:width: 100%
:::

:::{div}
:class: botones-clase
[Descargar presentación (PDF)](https://docs.google.com/presentation/d/10JLMArjn4YEWFA2YuAwn63luXcHlSDor0RJ7Jru_Q60/export/pdf)
[Abrir en Google Slides](https://docs.google.com/presentation/d/10JLMArjn4YEWFA2YuAwn63luXcHlSDor0RJ7Jru_Q60/view)
:::

## 2. Interactivo: ¿Le gustará esta camisa?

Una tienda quiere saber si una camisa nueva va a gustar. Entrena el modelo con las ventas pasadas,
cambia las etiquetas y pregúntale por una camisa nueva para diciembre.

:::{interactivo} interactivos/modelo.html
:titulo: ¿Le gustará esta camisa? Qué es un modelo
:::

## 3. Entrena tu propio modelo: Teachable Machine

[Teachable Machine](https://teachablemachine.withgoogle.com/) de Google permite entrenar un modelo
de imágenes, sonidos o posturas **desde el navegador y sin programar**: das ejemplos de cada clase
(las etiquetas), entrenas y pruebas en vivo con la cámara.

:::{div}
:class: botones-clase
[Abrir Teachable Machine](https://teachablemachine.withgoogle.com/train)
:::

## 4. Código de la sesión

% :::{codigo} codigo/NOMBRE_DEL_SCRIPT.py
% :titulo: Script de la sesión
% :::

:::{note} Próximamente
El código de esta sesión se publicará aquí.
:::
