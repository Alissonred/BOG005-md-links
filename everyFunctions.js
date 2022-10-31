const fs = require('fs');// importo modulo fs
const path = require('path');
const rutaPrueba = 'C:\\Users\\57322\\Desktop\\AR GENERALES\\BASES\\COURSES\\FORMAL\\LABORATORIA\\PROY 4 MDLINKS NODE\\BOG005-md-links\\carpetaPrueba' ;
const rutaPruebaFile = 'C:\\Users\\57322\\Desktop\\AR GENERALES\\BASES\\COURSES\\FORMAL\\LABORATORIA\\PROY 4 MDLINKS NODE\\BOG005-md-links\\carpetaPrueba\\pruebamd1.md' ;
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
    return path.extname(ruta) ==='.md' ? '.md': 'noext.md'
 }

function recursionValidate(ruta){
    let arrayMdFile =[]; // declaro array donde guardaré archivos md
    let rutaAbsoluta = absoluteValidate(ruta) // convierto en absoluta
    ///evaluo caso y redirecciono
    if(validateFileOrFolder(rutaAbsoluta) =='file'){  // evaluo si es un archivo
        if(extValidate(rutaAbsoluta) === '.md'){
            arrayMdFile.push(rutaAbsoluta)//pushee la ruta
        }
        else{
            console.log('el archivo no es .md');
        }
    }
    else if(validateFileOrFolder(rutaAbsoluta) =='directory'){ // evaluo si es un directorio
        let fileChildren = fs.readdirSync(rutaAbsoluta);
        fileChildren.forEach((doc)=>{//para cada uno de los archivos
            let proofDirectory = path.join(rutaAbsoluta, doc)// uniendo ruta madre con el hijo
            //console.log(doc);
            arrayMdFile = arrayMdFile.concat(recursionValidate(proofDirectory))//concat a array la ejec d func app en hijo
        })
    }
    return arrayMdFile
}

function readFileMd(ruta){
 return new Promise((resolve,reject)=>{
    fs.readFile(ruta , 'utf8', (error, data)=> {
         if(error){
            console.log(error);
         }
         else{
            resolve(data)/// MATCH EXPRES(DETECTE LINK), CREAR OBJ Y LLENAR ATRIB, PUSH DE OBJETO A ARRAY
         }
    });
 })
}
/// PENDIENTE FUNCION QUE RECORRA ARCHIVOS MD QUE RETORNE RUTA DE 1 ARCHIVO UNICAMENTE

function EveryOneMd(ruta){
    let arrayAllLinks = [];
    let arrayMds = recursionValidate(ruta); // array de mds
    console.log(arrayMds);        
return new Promise((resolve, reject)=>{
     arrayMds.forEach((file)=>{
        arrayAllLinks.push(readFileMd(file).then())  // en cada uno de los mds lea y empuje// probl .then???
     })
    resolve(arrayAllLinks)
    console.log(arrayAllLinks);
})

}

//existRoute(rutaPrueba).then(res => console.log(res))// okkkk
//console.log(absoluteValidate(rutaPrueba)); // okkk
//console.log(validateFileOrFolder(rutaPrueba)); /// okkk con rutas \\
//console.log(extValidate(rutaPrueba)); /// okkk
//console.log(directoryFileValidate(rutaPrueba));
//console.log(recursionValidate(rutaPrueba));
//readFileMd(rutaPruebaFile).then(res => console.log(res))
EveryOneMd(rutaPrueba).then(res => console.log(res))
//module.exports = existRoute;