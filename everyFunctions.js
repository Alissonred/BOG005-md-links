const fs = require('fs');// importo modulo fs
const path = require('path');
const rutaPrueba = 'C:\\Users\\57322\\Desktop\\AR GENERALES\\BASES\\COURSES\\FORMAL\\LABORATORIA\\PROY 4 MDLINKS NODE\\BOG005-md-links\\carpetaPrueba' ;
/* function existRoute(ruta) {
    return new Promise ((resolve, reject)=>{
        fs.stat(ruta, (error, stats) => {
            if (!error) {
               console.log('la ruta existe');
                 resolve(ruta)
            }
             else {
                 console.log('la ruta no existe,  SE VA AL FIN');
               return 'la ruta no existe,  SE VA AL FIN';
            }
            
        })
    })
} */
function absoluteValidate (ruta) {
    return path.isAbsolute(ruta) ? ruta : path.resolve(ruta) 
} 
function validateFileOrFolder(ruta) {
    if (fs.statSync(ruta).isFile()) {
        return 'file'
    }
    else if (fs.statSync(ruta).isDirectory()) {
        return 'directory'
    }
    else{
        return 'err'
    }
       
    
}
function extValidate(ruta){
    return path.extname(ruta) ==='.md' ? 'ext.md': 'noext.md'
 }
function directoryFileValidate(ruta){
    let fileChildren = fs.readdirSync(ruta);
    fileChildren.forEach((archivo)=>{

    })
 return fileChildren
}
function recursionValidate(ruta){
    //verif absolutez: absoluteValidate (ruta)
    let arrayMdFile =[]; // declaro array donde guardaré archivos md
    ///evaluo caso y redirecciono
    if(fs.stat(ruta).isFile){  // evaluo si es un archivo
        if(path.extname(ruta) === '.md'){
            arrayMdFile.push(ruta)//pushee la ruta
        }
        else{
            console.log('el archivo no es  .md');
        }
    }
    else if(fs.stat(ruta).isDirectory){ // evaluo si es un directorio
        let fileChildren = fs.readdirSync(ruta);
        fileChildren.forEach((doc)=>{//para cada uno de los archivos
        })
    }
}
//existRoute(rutaPrueba).then(res => console.log(res))// okkkk
//console.log(absoluteValidate(rutaPrueba)); // okkk
console.log(validateFileOrFolder(rutaPrueba)); /// okkk con rutas \\
//console.log(extValidate(rutaPrueba)); /// okkk
console.log(directoryFileValidate(rutaPrueba));
//console.log(recursionValidate(rutaPrueba));
//module.exports = existRoute;