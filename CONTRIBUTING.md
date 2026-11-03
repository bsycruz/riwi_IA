# Mantenimiento

El sitio se genera con Jupyter Book 2 (MyST) y se publica en GitHub Pages con cada push a `main`.

## Configuración inicial

```bash
npm install -g mystmd
pip install -r requirements.txt
git config core.hooksPath .githooks
git config user.email "<id>+<usuario>@users.noreply.github.com"
```

En GitHub, Settings > Pages > Source debe estar en GitHub Actions.

## Publicar un capítulo

1. Poner los archivos en la carpeta del capítulo (crear las subcarpetas si no existen): imágenes en `teoria_y_papers/imagenes/`, HTML en `interactivos/`, notebooks y scripts en `codigo/`. Los notebooks se suben con las salidas guardadas, el build no los ejecuta.
2. Copiar `_plantillas/plantilla_clase.md` como `index.md` del capítulo y completar las rutas.
3. Descomentar la línea del capítulo en `myst.yml`. Si es el primer módulo de un pilar, descomentar también su `children:`.
4. Revisar con `myst start` y hacer push.

Las presentaciones, PDFs pesados y datasets van en Drive, compartidos como "Cualquier persona con el enlace". Se incrustan así:

| Recurso | iframe | Descarga |
|---------|--------|----------|
| PDF | `drive.google.com/file/d/ID/preview` | `drive.google.com/uc?export=download&id=ID` |
| Google Slides | `docs.google.com/presentation/d/ID/embed` | `docs.google.com/presentation/d/ID/export/pdf` |
| Google Forms | `docs.google.com/forms/d/e/ID/viewform?embedded=true` | |

## Directivas propias

Definidas en `_extensions/recursos_clase.mjs`. Las rutas son relativas al `.md`.

```
:::{interactivo} interactivos/modelo.html
:alto: medio
:::

:::{codigo} codigo/01_notebook.ipynb
:titulo: 01 · Título
:::
```

`interactivo` muestra el HTML en un iframe (`alto`: bajo, medio o alto). `codigo` agrega los botones de Colab, Kaggle, descarga y GitHub.

## Claves y datos personales

- Las claves van en `.env` o en los Secrets de Colab, nunca en el código ni en las salidas de los notebooks.
- El hook `.githooks/pre-commit` bloquea commits con claves, correos personales, archivos de credenciales o archivos de más de 10 MB.
- En los ejemplos usar datos inventados.
- Si se sube una clave por error, revocarla en el servicio. Borrarla del repo no alcanza porque queda en el historial.
