const fs = require('fs');// importo modulo fs
const path = require('path');
const rutaPrueba = 'archivoPrueba.txt';
function existRoute(ruta) {
    return fs.stat(ruta, (error, stats) => {
        if (!error) {
            console.log('la ruta existe');
        }
        else {
            console.log('la ruta no existe');
        }
    })
}
existRoute(rutaPrueba);

module.exports = existRoute;