const { mdLinks } = require('./funcion.js')
const { statsLinks } = require('./everyFunctions.js')

let validateValue = false; // valor por defecto
let statsValue = false;// valor por defecto

function cliMdLinks(file, options) {
  let retorno = []
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
return new Promise((resolve, reject) => {

    if (validateValue === true && statsValue === true) {
      //console.log('llamar a funcion con todo');
      mdLinks(file, { validate: true }).then(res=> {
        //console.log(res, statsLinks(res),'ejecutar ambas funciones')
        retorno = [res, statsLinks(res)];
        //console.log(retorno, 'ejecutar ambas funciones');
        resolve(retorno) 
      });
        
      //statsLinks();/// verificar
    }
    else if (validateValue === false && statsValue === false) {
      //console.log('ejecutar funcion por defecto');
      /// pendiente verificar si es porque se añadieron comandos no validos
      mdLinks(file, { validate: false }).then(res=>{ 
        //console.log(res, 'ejecutar funcion por defecto')
        retorno = res;
        resolve(retorno) 
      });
    }
    else if (validateValue === true && statsValue === false) {
      //console.log('llamar funcion con validate true solamente');
      mdLinks(file, { validate: true }).then(res=> {
      //console.log(res, 'llamar funcion con validate true solamente')
      retorno = res;
      resolve(retorno) 
      });
    }
    else if (validateValue === false && statsValue === true) {
      //console.log('llamar funcion con validate false y calcular stats');
      mdLinks(file, { validate: false }).then(res=> {
        let estadisticas = statsLinks(res)
        delete estadisticas.Broken;
        //console.log(estadisticas,'llamar funcion con validate false y calcular stats');
        retorno = estadisticas;
        resolve(retorno) 
      });
    }
    //resolve(retorno) 
})  
  }
  
  module.exports = {cliMdLinks}