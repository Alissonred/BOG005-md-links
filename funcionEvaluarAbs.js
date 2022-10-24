const fs = require('fs');// importo modulo fs
const path = require('path');////modulo para usar metodos de rutas
const rutaPrueba =  'C:/foo/..' /* 'archivoPrueba.txt' */;
function absoluteValidate (ruta) {
    let absPathValidate = path.isAbsolute(ruta); /// valido estado de absolutez rta en boolean
    if(absPathValidate  === false){
        console.log('la ruta no es absoluta');
        let absConvertpath = path.resolve(ruta); /// La convierto en absoluta
        console.log('ya la convertimos :) :', absConvertpath)
    //return absConvertpath 
    }
    else {
        console.log('la ruta es absoluta');
    }
    //console.log(ruta);
     return ruta
} 

absoluteValidate(rutaPrueba/* 'C:/foo/..' */);
