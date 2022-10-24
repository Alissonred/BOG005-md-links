const fs = require('fs');// importo modulo fs
const path = require('path');
const rutaPrueba = 'archivoPrueba.txt';
function validateFileOrFolder(ruta) {
    return fs.stat(ruta, (error, stats) => {
        if (!error) {
            if (stats.isFile) {
                console.log('es un archivo');
            }
            else if (stats.isDirectory) {
                console.log('es una carpeta');
            }
        }
        else {
            console.log('la ruta no existe');
        }
    })
}
validateFileOrFolder(rutaPrueba);

module.exports = validateFileOrFolder;