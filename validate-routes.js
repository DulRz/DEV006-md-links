const path = require('node:path');
const fs = require('node:fs').promises;

//es la ruta es absoluta?
function isAbsolute(route) {
  return path.isAbsolute(route);
}
//console.log(isAbsolute('prueba\readmeprueba.md'));

//convertir ruta relativa a absoluta
function convertToAbsolute(relativePath) {
  const actualDir = process.cwd(); // Obtener el directorio actual
  const absolutePath = path.resolve(actualDir, relativePath); //conversión de ruta relativa a absoluta
  const replacePath= absolutePath.replace(/\\/g,'/'); //reemplazar \
return replacePath;
}
//console.log(convertToAbsolute('./prueba/readmeprueba.md'));

// la ruta existe?
function isExist(route) {
  return fs.access(route)
    .then(() => {
   console.log('La ruta existe');
    return true;
  })
    .catch(() => {
   console.log('La ruta no existe');
    return false;
  });
}
console.log(isExist('./prueba/readmeprueba.md'));


module.exports = {
isAbsolute,
convertToAbsolute,
isExist,
}
