
//const mdExectuted = require('./funcion.js');
const options = process.argv;/// array con los procesos que está corriendo [node,archivo js, path, comando1, comando2]
const file = options[2]
console.log(options)
let validateValue = false; // valor por defecto
let statsValue = false;// valor por defecto
//// evaluo valores como casos aislados////////
if (options[3]=== '--validate' || options[4]=== '--validate'){
  validateValue = true;
}
if (options[4]=== '--stats' || options[3]=== '--stats'){
  statsValue = true;
}

//////redurecciono según el caso evaluo como casos ligados/////////////

console.log(validateValue, 'es el valor de validate');
console.log(statsValue, 'es el valor de stats');

if(validateValue === true && statsValue === true){
  console.log('llamar a funcion con todo');
  //mdlinks(file,{validate:true});
}
else if(validateValue === false && statsValue === false){
  console.log('ejecutar funcion por defecto');
  /// pendiente verificar si es porque se añadieron comandos no validos
  //mdlinks(file,{validate:false});
}
else if(validateValue === true && statsValue === false){
  console.log('llamar funcion con validate true solamente');
  //mdlinks(file,{validate:true});
}
else if(validateValue === false && statsValue === true){
  console.log('llamar funcion con validate false y calcular stats');
  //mdlinks(file,{validate:false});
}
