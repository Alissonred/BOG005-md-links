#!/usr/bin/env node

//const mdExectuted = require('./funcion.js');
//const { mdLinks } = require('./funcion.js')
//const { statsLinks } = require('./everyFunctions.js')
const { cliMdLinks } = require('./CLI.js')

//const rutaPrueba = 'C:\\Users\\57322\\Desktop\\AR GENERALES\\BASES\\COURSES\\FORMAL\\LABORATORIA\\PROY 4 MDLINKS NODE\\BOG005-md-links\\carpetaPrueba';
//const rutaPruebaFile = 'C:\\Users\\57322\\Desktop\\AR GENERALES\\BASES\\COURSES\\FORMAL\\LABORATORIA\\PROY 4 MDLINKS NODE\\BOG005-md-links\\carpetaPrueba\\pruebamd1.md';
const opciones = process.argv;/// array con los procesos que está corriendo [node,archivo js, path, comando1, comando2]
const ruta = opciones[2]
console.log(opciones, 'es options')
let validateValue = false; // valor por defecto
let statsValue = false;// valor por defecto

/* function cliMdLinks(file, options) {
  //// evaluo valores como casos aislados////////
  if (options[3] === '--validate' || options[4] === '--validate') {
    validateValue = true;
  }
  if (options[4] === '--stats' || options[3] === '--stats') {
    statsValue = true;
  }
  //////redurecciono según el caso evaluo como casos ligados/////////////

  console.log(validateValue, 'es el valor de validate');
  console.log(statsValue, 'es el valor de stats');

  if (validateValue === true && statsValue === true) {
    //console.log('llamar a funcion con todo');
    mdLinks(file, { validate: true }).then(res=> {
      console.log(res, statsLinks(res),'ejecutar ambas funciones')});
    
  }
  else if (validateValue === false && statsValue === false) {
    //console.log('ejecutar funcion por defecto');
    /// pendiente verificar si es porque se añadieron comandos no validos
    mdLinks(file, { validate: false }).then(res=> console.log(res, 'ejecutar funcion por defecto'));
  }
  else if (validateValue === true && statsValue === false) {
    //console.log('llamar funcion con validate true solamente');
    mdLinks(file, { validate: true }).then(res=> console.log(res, 'llamar funcion con validate true solamente'));
  }
  else if (validateValue === false && statsValue === true) {
    //console.log('llamar funcion con validate false y calcular stats');
    mdLinks(file, { validate: false }).then(res=> {
      let estadisticas = statsLinks(res)
      delete estadisticas.Broken;
      console.log(estadisticas, 'llamar funcion con stats solamente');
    });
  }

}
 */
cliMdLinks(ruta, opciones).then(res => console.log(res))