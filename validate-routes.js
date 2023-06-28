const path = require('node:path');
const fs = require('node:fs');

//es la ruta es absoluta?
function isAbsolute(route) {
  return path.isAbsolute(route);
}
//console.log(isAbsolute('prueba\readmeprueba.md'));

//convertir ruta relativa a absoluta
function convertToAbsolute(relativePath) {
  const actualDir = process.cwd(); // Obtener el directorio actual
  const absolutePath = path.resolve(actualDir, relativePath); //conversión de ruta relativa a absoluta
return absolutePath;
}
console.log(convertToAbsolute('./prueba/readmeprueba.md'));

/*function toAbsolute(currentPath) {
  let absolutePath = '';

  if (path.isAbsolute(currentPath) && isExist(currentPath)) {
      absolutePath = currentPath.replace(/\\/g,'/');
  } else if (isExist(currentPath)){
      absolutePath = path.resolve(currentPath).replace(/\\/g,'/');
  } else {
    absolutePath = "tu ruta no existe";
  }
  return absolutePath;
}
console.log(toAbsolute('./prueba/readmeprueba.md'));*/

/*existe la ruta?
function isExist(route) {
  return fs.promises.stat(route)
    .then(() => true)
    .catch(() => false);
}
/*function isExist(route) {
  return fs.existsSync(route)
}*/

module.exports = {
isAbsolute,
convertToAbsolute,
}
