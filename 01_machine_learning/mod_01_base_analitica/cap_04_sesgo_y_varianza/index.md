---
title: "Capítulo 4: Subajuste, sobreajuste, sesgo y varianza"
---

¿El modelo **aprendió** o solo **memorizó**? Un buen modelo no es el que acierta en los datos
que ya vio, sino el que acierta en casos nuevos. En este capítulo vemos los dos errores clásicos
y cómo detectarlos.

## Objetivos de aprendizaje

- Diferenciar subajuste (aprende muy poco) de sobreajuste (memoriza los detalles).
- Relacionar cada caso con el sesgo y la varianza del modelo.
- Detectar el problema comparando el error en entrenamiento con el error en datos nuevos.

## 1. Teoría y presentaciones

### Presentación: Subajuste, sobreajuste, sesgo y varianza

:::{iframe} https://docs.google.com/presentation/d/1hJltUXlelokhYLzKERWodwvrOB5AvO0SY5Ni-EcNHj8/embed?start=false&loop=false&delayms=3000
:width: 100%
:::

:::{div}
:class: botones-clase
[Descargar presentación (PDF)](https://docs.google.com/presentation/d/1hJltUXlelokhYLzKERWodwvrOB5AvO0SY5Ni-EcNHj8/export/pdf)
[Abrir en Google Slides](https://docs.google.com/presentation/d/1hJltUXlelokhYLzKERWodwvrOB5AvO0SY5Ni-EcNHj8/view)
:::

## 2. Interactivo: ¿La máquina aprendió qué es un árbol?

La máquina estudió 6 fotos y después presenta un examen con 6 cosas que nunca vio. Recorre los
casos de subajuste, sobreajuste, sesgo y varianza, y descubre cómo detectar cada uno.

:::{interactivo} interactivos/sesgo_varianza.html
:titulo: Subajuste, sobreajuste, sesgo y varianza
:alto: alto
:::

## 3. Código de la sesión

% :::{codigo} codigo/01_NOMBRE_DEL_NOTEBOOK.ipynb
% :titulo: 01 · Título del notebook
% :::

:::{note} Próximamente
El código de esta sesión se publicará aquí.
:::
