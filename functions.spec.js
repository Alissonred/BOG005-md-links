const { absoluteValidate, validateFileOrFolder, extValidate, recursionValidate, readFileMd, EveryOneMd, getOneLink, validateHttpOne, EveryOneValidateHttp } = require('./everyFunctions.js');
const path = require('path');
const mockRutaOneFile = 'C:\\Users\\57322\\Desktop\\AR GENERALES\\BASES\\COURSES\\FORMAL\\LABORATORIA\\PROY 4 MDLINKS NODE\\BOG005-md-links\\carpetaPrueba\\pruebamd1.md';
const mockRutaOneFileNoMd = 'C:\\Users\\57322\\Desktop\\AR GENERALES\\BASES\\COURSES\\FORMAL\\LABORATORIA\\PROY 4 MDLINKS NODE\\BOG005-md-links\\carpetaPrueba\\archivoPrueba.txt';
const mockRutaFolder = 'C:\\Users\\57322\\Desktop\\AR GENERALES\\BASES\\COURSES\\FORMAL\\LABORATORIA\\PROY 4 MDLINKS NODE\\BOG005-md-links\\carpetaPrueba';
const mockRutaRelativa = 'carpetaPrueba';
const mockRutaRelativaMd = 'carpetaPrueba\\pruebamd1.md';
const mockRutaOneFileVacia = 'C:\\Users\\57322\\Desktop\\AR GENERALES\\BASES\\COURSES\\FORMAL\\LABORATORIA\\PROY 4 MDLINKS NODE\\BOG005-md-links\\carpetaPruebaTestVacios\\archivoVacio.md';

describe('test de funciones sincronas', () => {
    ///revisar si se debe preparar mas el entorno
    it('verifica si convierte la ruta en absoluta', () => {
        let rutaAbsolutaConv = absoluteValidate(mockRutaRelativa)
        let rutaConvertida = path.resolve(mockRutaRelativa)
        expect(rutaAbsolutaConv).toEqual(rutaConvertida)
        expect(typeof absoluteValidate).toBe('function')
    })
    it('verifica si validateFileOrFolder detecta el tipo de archivo (sincrona)', () => {
        let rutaFolder = validateFileOrFolder(mockRutaFolder)
        let rutaFile = validateFileOrFolder(mockRutaOneFile)
        expect(typeof validateFileOrFolder).toBe('function')
        expect(rutaFile).toEqual('file')
        expect(rutaFolder).toEqual('directory')
    })
    it('verifica si detecta la extensión del archivo (sincrona)', () => {
        let extensionFolder = extValidate(mockRutaFolder)
        let extensionfileMd = extValidate(mockRutaOneFile)
        let extensionfileNoMd = extValidate(mockRutaOneFileNoMd)
        expect(extensionFolder).toEqual('noext.md')
        expect(extensionfileMd).toEqual('.md')
        expect(extensionfileNoMd).toEqual('noext.md')
        expect(typeof extValidate).toBe('function')
    })
    it('verifica si realiza la recursión (sincrona)', () => { /// confirmar si es asincrona
        let extensionFolderRecursion = recursionValidate(mockRutaFolder)
        let extensionfileMdRecursion = recursionValidate(mockRutaOneFile)
        let mockRecursionFolder = [
            'C:\\Users\\57322\\Desktop\\AR GENERALES\\BASES\\COURSES\\FORMAL\\LABORATORIA\\PROY 4 MDLINKS NODE\\BOG005-md-links\\carpetaPrueba\\carpetaPrueba2\\pruebamd2.1.md',
            'C:\\Users\\57322\\Desktop\\AR GENERALES\\BASES\\COURSES\\FORMAL\\LABORATORIA\\PROY 4 MDLINKS NODE\\BOG005-md-links\\carpetaPrueba\\pruebamd1.md',
            'C:\\Users\\57322\\Desktop\\AR GENERALES\\BASES\\COURSES\\FORMAL\\LABORATORIA\\PROY 4 MDLINKS NODE\\BOG005-md-links\\carpetaPrueba\\pruebamd2.md'
        ]
        let mockRecursionFile = [
            'C:\\Users\\57322\\Desktop\\AR GENERALES\\BASES\\COURSES\\FORMAL\\LABORATORIA\\PROY 4 MDLINKS NODE\\BOG005-md-links\\carpetaPrueba\\pruebamd1.md'
        ]
        expect(extensionFolderRecursion).toEqual(mockRecursionFolder)
        expect(extensionfileMdRecursion).toEqual(mockRecursionFile)
        expect(typeof extValidate).toBe('function')
    })

})

describe('test de funciones asincronas', () => {
    ///revisar si se debe preparar mas el entorno
    it('verifica si lee el archivo readFileMd, retorna un array del archivo con obj links dado link indiv', () => {// testear el error
        let objetoLinkDeMockRutaRelativaMd = [
            {
                "file": "carpetaPrueba\\pruebamd1.md",
                "href": "https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions",
                "text": "[exp en prueba 1]",
            },
            {
                "file": "carpetaPrueba\\pruebamd1.md",
                "href": "https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Text_formatting",
                "text": "[otro ejemplo prueba 1]",
            },
        ]
        return expect(readFileMd(mockRutaRelativaMd)).resolves.toEqual(objetoLinkDeMockRutaRelativaMd)
    })

    it('verifica si EveryOneMd retorna un array de promesas(array por cu archivo con obj links ) ', () => {
        let mockarraypromises = [
            [
                {
                    "file": "C:\\Users\\57322\\Desktop\\AR GENERALES\\BASES\\COURSES\\FORMAL\\LABORATORIA\\PROY 4 MDLINKS NODE\\BOG005-md-links\\carpetaPrueba\\carpetaPrueba2\\pruebamd2.1.md",
                    "href": "https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions",
                    "text": "[exp en prueba 2.1]",
                },
                {
                    "file": "C:\\Users\\57322\\Desktop\\AR GENERALES\\BASES\\COURSES\\FORMAL\\LABORATORIA\\PROY 4 MDLINKS NODE\\BOG005-md-links\\carpetaPrueba\\carpetaPrueba2\\pruebamd2.1.md",
                    "href": "https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Text_formatting",
                    "text": "[otro ejemplo prueba 2.1]",
                },
            ],
            [
                {
                    "file": "C:\\Users\\57322\\Desktop\\AR GENERALES\\BASES\\COURSES\\FORMAL\\LABORATORIA\\PROY 4 MDLINKS NODE\\BOG005-md-links\\carpetaPrueba\\pruebamd1.md",
                    "href": "https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions",
                    "text": "[exp en prueba 1]",
                },
                {
                    "file": "C:\\Users\\57322\\Desktop\\AR GENERALES\\BASES\\COURSES\\FORMAL\\LABORATORIA\\PROY 4 MDLINKS NODE\\BOG005-md-links\\carpetaPrueba\\pruebamd1.md",
                    "href": "https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Text_formatting",
                    "text": "[otro ejemplo prueba 1]",
                },
            ],
            [
                {
                    "file": "C:\\Users\\57322\\Desktop\\AR GENERALES\\BASES\\COURSES\\FORMAL\\LABORATORIA\\PROY 4 MDLINKS NODE\\BOG005-md-links\\carpetaPrueba\\pruebamd2.md",
                    "href": "https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions",
                    "text": "[exp en prueba 2]",
                },
                {
                    "file": "C:\\Users\\57322\\Desktop\\AR GENERALES\\BASES\\COURSES\\FORMAL\\LABORATORIA\\PROY 4 MDLINKS NODE\\BOG005-md-links\\carpetaPrueba\\pruebamd2.md",
                    "href": "https://develop.mozilla.org/es/docs/Web/JavaScript/Guide/Text_formatting",
                    "text": "[otro ejemplo prueba 2c DAÑADO]",
                },
            ]
        ]
        return expect(EveryOneMd(mockRutaRelativa)).resolves.toEqual(mockarraypromises)
    })
    it('verifica si getOneLink detecta url y guarda en un obj que a su vez eztá en un array', () => {
        ///pendiente arreglar expresiones regulares
        let textoArchivo = '# prueba 1 [exp en prueba 1](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions) [otro ejemplo prueba 1](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Text_formatting)';
        let deteccLinks = [
            {
                href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions',
                text: '[exp en prueba 1]',
                file: 'C:\\Users\\57322\\Desktop\\AR GENERALES\\BASES\\COURSES\\FORMAL\\LABORATORIA\\PROY 4 MDLINKS NODE\\BOG005-md-links\\carpetaPrueba\\pruebamd1.md'
            },
            {
                href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Text_formatting',
                text: '[otro ejemplo prueba 1]',
                file: 'C:\\Users\\57322\\Desktop\\AR GENERALES\\BASES\\COURSES\\FORMAL\\LABORATORIA\\PROY 4 MDLINKS NODE\\BOG005-md-links\\carpetaPrueba\\pruebamd1.md'
            }
        ]
        ///cuando el archivo es vacio
        let textoArchivoVacio = '';
        let rtaArchivoVacio = [
            {
                "file": "C:\\Users\\57322\\Desktop\\AR GENERALES\\BASES\\COURSES\\FORMAL\\LABORATORIA\\PROY 4 MDLINKS NODE\\BOG005-md-links\\carpetaPruebaTestVacios\\archivoVacio.md",
                "href": "No hay URL",
                "text": "No hay texto de URL",
            }
        ]
        //expect(getOneLink(textoArchivo, mockRutaOneFile)).toEqual(deteccLinks) // debe ingresar ruta absoluta
        expect(getOneLink(textoArchivoVacio, mockRutaOneFileVacia)).toEqual(rtaArchivoVacio) // debe ingresar ruta absoluta
    })
    it('verifica si validateHttpOne valida el estado de un link', () => {
        let objLinkRecibido = {
            href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions',
            text: '[exp en prueba 2.1]',
            file: 'C:\\Users\\57322\\Desktop\\AR GENERALES\\BASES\\COURSES\\FORMAL\\LABORATORIA\\PROY 4 MDLINKS NODE\\BOG005-md-links\\carpetaPrueba\\carpetaPrueba2\\pruebamd2.1.md',
        };
        let objLinkEntregado = {
            href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions',
            text: '[exp en prueba 2.1]',
            file: 'C:\\Users\\57322\\Desktop\\AR GENERALES\\BASES\\COURSES\\FORMAL\\LABORATORIA\\PROY 4 MDLINKS NODE\\BOG005-md-links\\carpetaPrueba\\carpetaPrueba2\\pruebamd2.1.md',
            status: 200,
            ok: 'OK'
        };
        expect(validateHttpOne(objLinkRecibido)).resolves.toEqual(objLinkEntregado)
    })
})

