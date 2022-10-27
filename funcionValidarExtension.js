const fs = require('fs');// importo modulo fs
const path = require('path');////modulo para usar metodos de rutas
const rutaPrueba =  'archivoPrueba.txt' ;
//const rutaPrueba =  'C:/foo/..' ;
function extValidate(ruta){
   let arrayMdFile =[];
   let ext = path.extname(ruta);
   console.log(ext);
   if(ext == '.md'){
    console.log('el archivo es .md');
    arrayMdFile.push();//(guarde en array) se debe ajustar para que añada la ruta? o el nombre,
   }
   else{
    console.log('el archivo no es .md, SE VA AL FIN');
   }
    return ext // validar si eso es lo que debe retornar
}

extValidate(rutaPrueba);
module.exports = extValidate;