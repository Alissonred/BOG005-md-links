const fs = require('fs');// importo modulo fs
const path = require('path');////modulo para usar metodos de rutas
const rutaPrueba = 'archivoPrueba.txt' ;
//const rutaPrueba =  'C:/foo/..' ;
function absoluteValidate (ruta) {
    let absPathValidate = path.isAbsolute(ruta); /// valido estado de absolutez rta en boolean
    if(absPathValidate  === false){
        console.log('la ruta no es absoluta');
        let absConvertpath = path.normalize(path.resolve(ruta)); /// La convierto en absoluta
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
module.exports = absoluteValidate;
