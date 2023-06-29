const path = require('node:path');
const fs = require('node:fs');

//es la ruta es absoluta?
function isAbsolute(route) { //validar si la ruta es absoluta
  return path.isAbsolute(route);
}
//console.log(isAbsolute('prueba\readmeprueba.md'));

//convertir ruta relativa a absoluta
function convertToAbsolute(route) {
  const absolutePath = path.resolve(route); //conversión de ruta relativa a absoluta
  const replacePath= absolutePath.replace(/\\/g,'/'); //reemplazar \
return replacePath;
}
//console.log(convertToAbsolute('./prueba/readmeprueba.md'));

// la ruta existe?
function isExist(route) {
  return fs.existsSync(route)
}
console.log(isExist('./comida/prueba.md')); //ejemplo con ruta no existente

module.exports = {
isAbsolute,
convertToAbsolute,
isExist,
}
