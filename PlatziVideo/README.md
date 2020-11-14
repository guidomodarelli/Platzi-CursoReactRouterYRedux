# Proyecto React JS

## Empezando

```bash
git init
npm init -y
npm i react react-dom
```

### Agregando compatibilidad con todos los navegadores usando Babel

Babel es una herramienta muy popular para escribir JavaScript moderno y transformarlo en código que pueda entender cualquier navegador.

```bash
npm i -D @babel/core babel-loader @babel/preset-env @babel/preset-react
```

### Webpack: Empaquetando nuestros módulos

"Webpack es una herramienta que nos ayuda a compilar multiples archivos (JavaScript, HTML, CSS, imágenes) en uno solo (o a veces un poco más) que tendrá todo nuestro código listo para producción.

```bash
npm i -D webpack webpack-cli html-webpack-plugin html-loader
```

### Webpack Dev Server: Reporte de errores y Cambios en tiempo real

```bash
npm i -D webpack-dev-server
```

### Estilos con SASS

Los preprocesadores como Sass son herramientas que nos permiten escribir CSS con una sintaxis un poco diferente y más amigable que luego se transformará en CSS normal. Gracias a Sass podemos escribir CSS con variables, mixins, bucles, entre otras características.

```bash
npm i -D mini-css-extract-plugin css-loader node-sass sass-loader
```

### Configuración final: ESLint y Git Ignore

```bash
npm i -D eslint babel-eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y
```

### Añadiendo imágenes con Webpack

```bash
npm i -D file-loader
```

### Creando una fake API

```bash
sudo npm install json-server -g
```

Ejecutar el servidor de JSON Server:

```bash
json-server archivoParaTuAPI.json
```

### PropTypes

Los PropTypes son una propiedad de nuestros componentes que nos permiten especificar qué tipo de elementos son nuestras props: arrays, strings, números, etc.

```bash
npm install --save prop-types
```
