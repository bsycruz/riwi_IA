import fs from 'node:fs';
import path from 'node:path';

const RAIZ = process.cwd();
const RAMA = 'main';
const PUBLICO = path.join(RAIZ, '_build', 'site', 'public');
const BASE_URL = (process.env.BASE_URL || '').replace(/\/$/, '');
const DESARROLLO = process.argv.includes('start');
const PUERTO_CONTENIDO = process.env.SERVER_PORT || '3100';

function repoGithub() {
  const yml = fs.readFileSync(path.join(RAIZ, 'myst.yml'), 'utf8');
  const m = yml.match(/^\s*github:\s*https:\/\/github\.com\/([^/\s]+\/[^/\s#]+)/m);
  return m ? m[1].replace(/\.git$/, '') : null;
}

function rutaRepo(arg, vfile) {
  const abs = path.resolve(path.dirname(vfile.path), arg);
  return { abs, rel: path.relative(RAIZ, abs).split(path.sep).join('/') };
}

function publicar(abs, rel, carpeta) {
  const destino = path.join(PUBLICO, carpeta, rel);
  fs.mkdirSync(path.dirname(destino), { recursive: true });
  fs.copyFileSync(abs, destino);
  return DESARROLLO
    ? `http://localhost:${PUERTO_CONTENIDO}/${carpeta}/${rel}`
    : `/build/${carpeta}/${rel}`;
}

const texto = (value) => ({ type: 'text', value });
const enlace = (url, value) => ({ type: 'link', url, children: [texto(value)] });
const botones = (...links) => ({ type: 'div', class: 'botones-clase', children: [{ type: 'paragraph', children: links }] });

function aviso(vfile, msg) {
  vfile.message(msg);
  return [{ type: 'admonition', kind: 'danger', children: [{ type: 'paragraph', children: [texto(msg)] }] }];
}

const interactivo = {
  name: 'interactivo',
  doc: 'Incrusta un HTML propio del repositorio con un botón para abrirlo en pestaña nueva.',
  arg: { type: String, required: true, doc: 'Ruta relativa al archivo .html' },
  options: {
    alto: { type: String, doc: 'bajo, medio (por defecto) o alto' },
    titulo: { type: String, doc: 'Título accesible del iframe' },
  },
  run(data, vfile) {
    const { abs, rel } = rutaRepo(data.arg, vfile);
    if (!fs.existsSync(abs)) return aviso(vfile, `No existe el interactivo: ${rel}`);

    const url = publicar(abs, rel, 'interactivos');
    const src = DESARROLLO ? url : BASE_URL + url;

    const alto = ['bajo', 'medio', 'alto'].includes(data.options?.alto) ? data.options.alto : 'medio';
    return [
      {
        type: 'div',
        class: `interactivo interactivo-${alto}`,
        children: [{ type: 'iframe', src, width: '100%', title: data.options?.titulo || path.basename(rel) }],
      },
      botones(enlace(data.arg, 'Abrir HTML en pantalla completa')),
    ];
  },
};

const codigo = {
  name: 'codigo',
  doc: 'Botones de acceso a un notebook o script de la carpeta codigo/.',
  arg: { type: String, required: true, doc: 'Ruta relativa al .ipynb o .py' },
  options: { titulo: { type: String, doc: 'Texto que encabeza los botones' } },
  run(data, vfile) {
    const { abs, rel } = rutaRepo(data.arg, vfile);
    if (!fs.existsSync(abs)) return aviso(vfile, `No existe el archivo de código: ${rel}`);

    const repo = repoGithub();
    const github = repo ? `https://github.com/${repo}/blob/${RAMA}/${rel}` : null;
    const nombre = path.basename(rel);
    const links = [];

    if (rel.endsWith('.ipynb') && github) {
      links.push(enlace(`https://colab.research.google.com/github/${repo}/blob/${RAMA}/${rel}`, 'Abrir en Google Colab'));
      links.push(enlace(`https://www.kaggle.com/kernels/welcome?src=${github}`, 'Abrir en Kaggle'));
    }
    const descarga = rel.endsWith('.ipynb') ? publicar(abs, rel, 'descargas') : data.arg;
    links.push(enlace(descarga, `Descargar ${nombre}`));
    if (github) links.push(enlace(github, 'Ver en GitHub'));

    const titulo = data.options?.titulo;
    const nodos = titulo ? [{ type: 'paragraph', children: [{ type: 'strong', children: [texto(titulo)] }] }] : [];
    return [...nodos, botones(...links)];
  },
};

export default {
  name: 'Recursos de clase',
  directives: [interactivo, codigo],
};
