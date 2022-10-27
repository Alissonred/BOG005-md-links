/* const fs = require('fs');// importo modulo fs
const path = require('path');////modulo para usar metodos de rutas
const rutaPrueba =  'C:\Users\57322\Desktop\AR GENERALES\OTROS\TESIS\tesis ely' ;
//let fileChildren = fs.readdirSync(rutaPrueba);
//console.log(fileChildren);
function directoryFileValidate(ruta){
  if(path.extname(path.resolve(ruta))=""){
    let fileChildren = [];
    //fileChildren = fs.readdirSync(ruta);
  }
     
 return fileChildren
}
directoryFileValidate(rutaPrueba); 
//let files = []
/* fs.readdir(rutaPrueba ,(err, result) => {
  if(err) {
    console.error(err)
    throw Error(err)
  }
  files = result
}) 
 */
//module.exports = directoryFileValidate;

const fs = require('fs');// importo modulo fs
const path = require('path');////modulo para usar metodos de rutas
fs.readdir('C:\\Users\\57322\\Desktop\\AR GENERALES', (error, archivos)=> {
  console.log(archivos);
  /* archivos.forEach((archivo)=>{
    if(!error){
      console.log(archivo);
    }
    else {
      console.log('hay un error', error)
    }
  } */
  //)
})