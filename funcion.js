const {absoluteValidate, validateFileOrFolder, extValidate, recursionValidate, readFileMd, EveryOneMd, getOneLink, validateHttpOne, EveryOneValidateHttp, statsLinks} = require('./everyFunctions.js');
const path = require('path');
const fs = require('fs');// importo modulo fs
const axiosHttp = require('axios');
const rutaPruebaMD = 'C:\\Users\\57322\\Desktop\\AR GENERALES\\BASES\\COURSES\\FORMAL\\LABORATORIA\\PROY 4 MDLINKS NODE\\BOG005-md-links\\carpetaPrueba\\pruebamd1.md';
const rutaPrueba = 'C:\\Users\\57322\\Desktop\\AR GENERALES\\BASES\\COURSES\\FORMAL\\LABORATORIA\\PROY 4 MDLINKS NODE\\BOG005-md-links\\carpetaPrueba';

/* EveryOneMd(rutaPrueba).then(res => {
  EveryOneValidateHttp(res.flat()).then(res => console.log(res, 'es lo de abajo '))// retorna
  //console.log(res.flat()) // el resultado de la promesa lo vuelvo 1 solo array
})
 */


const mdlinks = (route/* , options= {validate: true} */)=>{
//////traer funciones/////////////////////////////////////////
 let rutaAbsoluta = absoluteValidate(route);//vuelve abs
 let recursionValidacion = recursionValidate(rutaAbsoluta)//devueve array de .md
 let deteccionLinks = EveryOneMd(rutaAbsoluta).then(res =>{
  if(res.length ===0 ){ resolve('no se encontraron links')}
  EveryOneValidateHttp(res.flat()).then(res => console.log(res))
})
console.log(recursionValidacion);
 ////caso de que no hayan archivos md
 
/////////
return deteccionLinks
}
mdlinks(rutaPrueba)






/* const mdlinks = (route, options= {validate: true})=>{
return new Promise((resolve, reject) => {
  EveryOneMd(route).then(res => {
    EveryOneValidateHttp(res.flat()).then(res => resolve(res))// retorna
    //console.log(res.flat()) // el resultado de la promesa lo vuelvo 1 solo array
})
}) */
//validar si es ruta absoluta
// volver la ruta absoluta
//leer extensioon de archivo 
    //tomar solo si es archivo .md
    //validar si es una carpeta
      //recorrer cada archivo(forEach)
      //aplicar recursion
    //retornar array de archivos .md
//leer documento en busca de links
//validate true/ false segun la selección




//mdlinks(rutaPruebaMD)

//module.exports =mdlinks;