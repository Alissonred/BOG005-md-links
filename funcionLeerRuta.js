const fs = require('fs');// importo modulo fs
const path = require('path');
const ruta = 'archivoPrueba.txt';
fs.stat(ruta, (error, stats) => {
    if (!error) {
        console.log('la ruta existe');
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