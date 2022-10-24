const path = require('path');
const fs = require('fs');// importo modulo fs
const funcionLeerRuta = require ('./funcionLeerRuta.js');
const funcionEvaluarAbs = require('./funcionEvaluarAbs.js');
const funcionValidarCarpetaOArchivo = require('./funcionValidarCarpetaOArchivo.js')
const funcionValidarExtension = require('./funcionValidarExtension.js');
const funcionValidarDirectorio = require('./funcionValidarDirectorio.js');
const mdlinks = (path, options)=>{
//obtener parametros (eso lo hace el cli)
//validar si existe ruta (fs.stats)
//validar si es ruta absoluta
// volver la ruta absoluta
//leer extensioon de archivo 
    //tomar solo si es archivo .md
    //validar si es una carpeta
      //recorrer cada archivo(forEach)
      //aplicar recursion
    //retornar array de archivos .md
//leer documento en busca de links
//validate true/ false segun la selección

return promises.resolve( /// en caso de que la promesa sea resuelta( un mock de eso) retorne un array con 
[
{
    href: 'ruta parte1',
    text: 'ruta parte2'
}
]
)
}

module.exports =mdlinks;