const fs = require('fs');// importo modulo fs
const path = require('path');////modulo para usar metodos de rutas
const rutaPrueba =  'archivoPrueba.txt' ;
//const rutaPrueba =  'C:/foo/..' ;
function extValidate(ruta){
   let ext = path.extname(ruta);
   console.log(ext);
   if(ext == '.md'){
    console.log('el archivo es .md');
    ////guarde en array archivo md
   }
   else{
    console.log('el archivo no es .md');
   }
    return ext
}

extValidate(rutaPrueba);