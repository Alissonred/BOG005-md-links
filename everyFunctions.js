const fs = require('fs');// importo modulo fs
const path = require('path');
const axiosHttp = require('axios');
const { resolve } = require('path');
const rutaPrueba = 'C:\\Users\\57322\\Desktop\\AR GENERALES\\BASES\\COURSES\\FORMAL\\LABORATORIA\\PROY 4 MDLINKS NODE\\BOG005-md-links\\carpetaPrueba';
const rutaPruebaFile = 'C:\\Users\\57322\\Desktop\\AR GENERALES\\BASES\\COURSES\\FORMAL\\LABORATORIA\\PROY 4 MDLINKS NODE\\BOG005-md-links\\carpetaPrueba\\pruebamd1.md';
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
function absoluteValidate(ruta) {
    return path.isAbsolute(ruta) ? ruta : path.resolve(ruta)
}
function validateFileOrFolder(ruta) {
    if (fs.statSync(ruta).isFile()) {
        return 'file'
    }
    else if (fs.statSync(ruta).isDirectory()) {
        return 'directory'
    }
    else {
        return 'err'
    }
}

function extValidate(ruta) {
    return path.extname(ruta) === '.md' ? '.md' : 'noext.md'
}

function recursionValidate(rutaAbsoluta) {
    let arrayMdFile = []; // declaro array donde guardaré archivos md
    //let rutaAbsoluta = absoluteValidate(ruta) // convierto en absoluta
    ///evaluo caso y redirecciono
    if (validateFileOrFolder(rutaAbsoluta) == 'file') {  // evaluo si es un archivo
        if (extValidate(rutaAbsoluta) === '.md') {
            arrayMdFile.push(rutaAbsoluta)//pushee la ruta
        }
        else {
            console.log('el archivo no es .md');
        }
    }
    else if (validateFileOrFolder(rutaAbsoluta) == 'directory') { // evaluo si es un directorio
        let fileChildren = fs.readdirSync(rutaAbsoluta);
        fileChildren.forEach((doc) => {//para cada uno de los archivos
            let proofDirectory = path.join(rutaAbsoluta, doc)// uniendo ruta madre con el hijo
            //console.log(doc);
            arrayMdFile = arrayMdFile.concat(recursionValidate(proofDirectory))//concat a array la ejec d func app en hijo
        })
    }
    return arrayMdFile
}

function readFileMd(rutaIndividual) {
    return new Promise((resolve, reject) => {
        fs.readFile(rutaIndividual, 'utf8', (error, data) => {
            if (error) {
                console.log(error);
            }
            else {
                const link = getOneLink(data, rutaIndividual) /// MATCH EXPRES(DETECTE LINK), CREAR OBJ Y LLENAR ATRIB, PUSH DE OBJETO A ARRAY
                resolve(link)

            }
        });
    })
}

function EveryOneMd(arrayMds) {//recibe un array de rutas de archivos md
    let arrayPromises = [];
    //let arrayMds = recursionValidate(ruta); // array de mds     
    arrayMds.forEach((file) => {
        arrayPromises.push(readFileMd(file))  // arreglo de promesas, la lec de cu de los arch genera una promesa
    })
    return Promise.all(arrayPromises) // retorno un array de promesas
}

function getOneLink(file, ruta) {
    let foundFile = file.match(/\[.*\]\(https:\/\/[\w\-\.]+\/.*\)/g); /// patron escrito+link, .match lo devuelve en array
    let arrayLinks = [];
    if (foundFile) {///si hay links
        foundFile.forEach((link) => {
            arrayLinks.push({
                href: link.match(/https:\/\/.*[^)]/g).toString(),// porque la devolución es en array
                text: link.match(/\[.*\]/g).toString(),// porque la devolución es en array
                file: ruta,
            })
        })
    }
    else {
        arrayLinks.push({
            href: 'No hay URL',// porque la devolución es en array
            text: 'No hay texto de URL',// porque la devolución es en array
            file: ruta,
        })
    }
    return arrayLinks
}

function validateHttpOne(objLinkToValidate) {// recibe todo el objeto, solo 1 objeto link
return new Promise((resolve, reject) => {
    axiosHttp.get(objLinkToValidate.href).then((res) => {
        objLinkToValidate.status = res.status;// codigos de estado http
        objLinkToValidate.ok = res.statusText;
        resolve(objLinkToValidate) 
    }).catch((error) => {
        objLinkToValidate.ok = 'fail';
        resolve(objLinkToValidate) // con reject muestra error
    })

})
}

function EveryOneValidateHttp(arrayObjlinks) {

    let validateStatePromises = [];
    arrayObjlinks.forEach((link) => {
        validateStatePromises.push(validateHttpOne(link))///VALIDARLOS CON VALIDATE ONE 
    })
    //console.log(validateStatePromises);
    return Promise.all(validateStatePromises)// ARRAY DE PROMESAS  
}

function statsLinks(arrayObjlinks){
    let Total = arrayObjlinks.Length;
    let Unique = arrayObjlinks.Length;
    ///pte añadir los broken
  }


//existRoute(rutaPrueba).then(res => console.log(res))// okkkk
//console.log(absoluteValidate(rutaPrueba)); // okkk
//console.log(validateFileOrFolder(rutaPrueba)); /// okkk con rutas \\
//console.log(extValidate(rutaPrueba)); /// okkk
//console.log(directoryFileValidate(rutaPrueba));
//console.log(recursionValidate(rutaPrueba));
//readFileMd(rutaPruebaFile).then(res => console.log(res))
/* EveryOneMd(recursionValidate(rutaPrueba)).then(res => {
    EveryOneValidateHttp(res.flat()).then(res => console.log(res, 'es lo de abajo'))// retorna
    //console.log(res.flat()) // el resultado de la promesa lo vuelvo 1 solo array
}) */

module.exports = {absoluteValidate, validateFileOrFolder, extValidate, recursionValidate, readFileMd, EveryOneMd, getOneLink, validateHttpOne, EveryOneValidateHttp, statsLinks}