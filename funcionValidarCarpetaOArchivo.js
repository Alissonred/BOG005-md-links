const fs = require('fs');// importo modulo fs
const path = require('path');
const rutaPrueba = 'archivoPrueba.txt';
function validateFileOrFolder(ruta) {
    return fs.stat(ruta, (error, stats) => {
        let typeOfDoc= '';
        if (!error) {
            if (stats.isFile) {
                //console.log('es un archivo');
                return typeOfDoc = 'isFile';
            }
            else if (stats.isDirectory) {
                //console.log('es una carpeta');
                return typeOfDoc = 'isFolder';
            }
         console.log(typeOfDoc);
        }
        else {
            console.log('la ruta no existe, SE VA AL FIN');
        }
     return typeOfDoc
    })
}
//validateFileOrFolder(rutaPrueba);
console.log(validateFileOrFolder(rutaPrueba));

module.exports = validateFileOrFolder;