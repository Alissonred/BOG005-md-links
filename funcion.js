const { absoluteValidate, validateFileOrFolder, extValidate, recursionValidate, readFileMd, EveryOneMd, getOneLink, validateHttpOne, EveryOneValidateHttp } = require('./everyFunctions.js');
//const path = require('path');
//const fs = require('fs');// importo modulo fs
//const axiosHttp = require('axios');
const rutaPruebaMD = 'C:\\Users\\57322\\Desktop\\AR GENERALES\\BASES\\COURSES\\FORMAL\\LABORATORIA\\PROY 4 MDLINKS NODE\\BOG005-md-links\\carpetaPrueba\\pruebamd1.md';
const rutaPrueba = 'C:\\Users\\57322\\Desktop\\AR GENERALES\\BASES\\COURSES\\FORMAL\\LABORATORIA\\PROY 4 MDLINKS NODE\\BOG005-md-links\\carpetaPrueba';


const mdLinks = (route, options = {validate: false} ) => {
  return new Promise((resolve, reject) => {
    let rutaAbsoluta = absoluteValidate(route);//Devuelve ruta absoluta
    let recursionValidacion = recursionValidate(rutaAbsoluta)//devueve array de rutas .md
/*     let deteccionLinks = EveryOneMd(recursionValidacion).then(res => {//Devuelve objetos de links en array 
      //console.log(res, 'obj links puros')
      //EveryOneValidateHttp(res.flat()).then(res => console.log(res))// devuelve atributos con estado de validacion de links
    }) */
    if (options.validate === true) {/// ask como colocarlo 
      if (recursionValidacion.length === 0) { resolve('no se encontraron archivos .md') }//// revisar si es así
      console.log('se va al if validate true');
      EveryOneMd(recursionValidacion).then(res => {//Devuelve objetos de links en array 
        if (res.length === 0) { resolve('no hay links') }
        EveryOneValidateHttp(res.flat()).then(linkValidate => resolve(linkValidate))// devuelve atributos con estado de validacion de links
      })
    }
    else {
      if (recursionValidacion.length === 0) { resolve('no se encontraron archivos .md') }//// revisar si es así
      EveryOneMd(recursionValidacion).then(res => {//Devuelve objetos de links en array 
        if (res.length === 0) { resolve('no hay links') }
        resolve(res.flat())
      })
    }

  })
}

//mdLinks(rutaPrueba).then(res=> console.log(res, 'es el resultado de md'))
//mdlinks(rutaPrueba)
module.exports = {mdLinks}





