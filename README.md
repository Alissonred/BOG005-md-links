# Markdown Links

## Índice

* [1. Descripción](#1-preámbulo)
* [2. Instalación](#2-Instalación)
* [3. Funcionamiento básico](#3-funcionamiento-básico)
* [4. Documentación técnica](#4-documentación-técnica)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)


***

## 1. Descripción
La presente librería ejecutable en node.js permite obtener links o enlaces HTTP de archivos de tipo markdown. Como funcionalidades adicionales, permite validar dichos links y calcular algunos datos referentes a los links encontrados.

En general [Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado
ligero usado en diversas plataformas que manejan texto plano. Normalmente dichos archivos contienen links o vinculos que permiten complementar la información inicial. Sin embargo, dada la naturaleza de los links se requiere verificar su enlace. Lo anterior lleva a que la busqueda y validez manualmente resulte ser una tarea tediosa. Es allí donde esta librería hace tu vida mas sencilla.


## 2. Instalación
Para la instalación de la librería, se ejecuta el siguiente comando:

`npm i aredondomartinez-md-links`

Este módulo incluye un ejecutable como una interfaz que se puede importar.

`const {mdLinks} = require('aredondomartinez-md-links')`

## 3. Funcionamiento básico

El programa se ejecuta mediante una herramienta de línea de comando CLI (Command Line Interface - Interfaz de Línea de Comando), y su programación esta basada en promesas y recursividad.
### 3.1. Diagrama de flujo API
![diagrama-api](/images/MD%20links%20api%20.png)
### 3.2. Diagrama de flujo CLI
![diagrama-cli](/images/MD%20links%20CLI.png)


## 4. Documentación técnica
### 4.1) API

El módulo se importa en otros scripts de Node.js de la siguiente manera

`const {mdLinks} = require('aredondomartinez-md-links')`

##### Argumentos

* `path`: Ruta **absoluta** o **relativa** al **archivo** o **directorio**.
Si la ruta pasada es relativa, debe resolverse como relativa al directorio
desde donde se invoca node - _current working directory_).
* `options`: Un objeto con **únicamente** las siguientes propiedades:
  - `validate`: Booleano que determina si se desea validar los links
    encontrados.
  - `stats`: Booleano que determina si se desea obtener un output
    con información estadística general.

##### Valor de retorno

La función debe **retornar una promesa** (`Promise`) que **resuelva a un arreglo**
(`Array`) de objetos (`Object`), donde cada objeto representa un link y contiene
las siguientes propiedades

Con `validate:false` :

* `href`: URL encontrada.
* `text`: Texto que aparecía dentro del link (`<a>`).
* `file`: Ruta del archivo donde se encontró el link.

Con `validate:true` :

* `href`: URL encontrada.
* `text`: Texto que aparecía dentro del link (`<a>`).
* `file`: Ruta del archivo donde se encontró el link.
* `status`: Código de respuesta HTTP.
* `ok`: Mensaje `fail` en caso de fallo u `ok` en caso de éxito.


### 4.2) CLI (Command Line Interface - Interfaz de Línea de Comando)

El ejecutable se escribe de la siguiente manera en la **terminal**:

`md-links <path-to-file> [options]`

Por ejemplo:

```sh
$ md-links ./some/example.md
./some/example.md http://algo.com/2/3/ Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html algún doc
./some/example.md http://google.com/ Google
```

El comportamiento por defecto no valida las URLs, solo a partir de la ruta que reciben como
argumento buscan archivos markdown e imprimen los links que van encontrando, junto con la ruta del archivo donde aparece y el texto
que hay dentro del link. Sin embargo, existen dos opciones adicionales como se explica a continuación:

#### Options

##### `--validate`

La opción `--validate` realiza una petición HTTP para averiguar si el link funciona o no. Si el link resulta en una redirección a una
URL que responde ok, entonces consideraremos el link como ok, de lo contrario responde fail.

Por ejemplo:

```sh
$ md-links ./some/example.md --validate
./some/example.md http://algo.com/2/3/ ok 200 Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html fail 404 algún doc
./some/example.md http://google.com/ ok 301 Google
```

Vemos que el _output_ en este caso incluye la palabra `ok` o `fail` después de
la URL, así como el status de la respuesta recibida a la petición HTTP a dicha
URL.

##### `--stats`

Si la opción `--stats` es la que se ingresa, el output (salida) será un texto con estadísticas
básicas sobre los links.

```sh
$ md-links ./some/example.md --stats
Total: 3
Unique: 3
```

También podemos combinar `--stats` y `--validate` para obtener estadísticas que
necesiten de los resultados de la validación.

```sh
$ md-links ./some/example.md --stats --validate
Total: 3
Unique: 3
Broken: 1
```





