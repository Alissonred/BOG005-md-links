const { absoluteValidate, validateFileOrFolder, extValidate, recursionValidate, readFileMd, EveryOneMd, getOneLink, validateHttpOne, EveryOneValidateHttp, statsLinks } = require('./everyFunctions.js');
const mockRutaOneFile = 'C:\\Users\\57322\\Desktop\\AR GENERALES\\BASES\\COURSES\\FORMAL\\LABORATORIA\\PROY 4 MDLINKS NODE\\BOG005-md-links\\carpetaPrueba\\pruebamd1.md';
const mockRutaOneFileNoMd = 'C:\\Users\\57322\\Desktop\\AR GENERALES\\BASES\\COURSES\\FORMAL\\LABORATORIA\\PROY 4 MDLINKS NODE\\BOG005-md-links\\carpetaPrueba\\archivoPrueba.txt';
const mockRutaFolder = 'C:\\Users\\57322\\Desktop\\AR GENERALES\\BASES\\COURSES\\FORMAL\\LABORATORIA\\PROY 4 MDLINKS NODE\\BOG005-md-links\\carpetaPrueba';
const mockRutaRelativa = 'PROY 4 MDLINKS NODE\\BOG005-md-links\\carpetaPrueba';

describe('test de funciones sincronas', () => {
    ///revisar si se debe preparar mas el entorno
    it('verifica si convierte la ruta en absoluta', () => {
        let rutaAbsolutaConv = absoluteValidate(mockRutaRelativa)
        expect(rutaAbsolutaConv).toContain('C:')
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
        expect(extensionFolder).toEqual('')
        expect(extensionfileMd ).toEqual('.md')
        expect(extensionfileNoMd).toEqual('.txt')
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
        expect(extensionfileMdRecursion ).toEqual(mockRecursionFile)
        expect(typeof extValidate).toBe('function')
    })

})

describe('test de funciones asincronas', () => {
    ///revisar si se debe preparar mas el entorno
    it('verifica si lee el archivo readFileMd', () => {

    })
    it('verifica si EveryOneMd retorna un array de promesas', () => {

    })
    it('verifica si getOneLink detecta url con expresiones regulares', () => {

    })
})