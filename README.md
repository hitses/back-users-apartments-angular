# Backend para Frontend Angular

<!-- DISCLAIMER: todos los comentarios generales añadidos en el código de este proyecto se pueden tener en cuenta también para el servidor usado para la aplicación de Dashboard de React. -->

Este servidor se encarga de manejar las solicitudes de los administradores y proporcionar información de las bases de datos para el proyecto de [Frontend de Angular](https://github.com/hitses/front-users-apartments-angular).

## Configuración

- [Node.js](https://nodejs.org/es/) 22.X.X (versión utilizada en el desarrollo 22.13.0)

## Instalación

Para instalar las dependencias necesarias, ejecuta el siguiente comando en la terminal:

```bash
npm install
```

## Configuración de la base de datos

Para poder utilizar el servidor, es necesario que en local se esté ejecutando un servicio de base de datos MySQL.

La configuración del servidor se encuentra en el archivo `.src/config/configDb.js`.

En este archivo, se define la conexión a la base de datos, así como la configuración de la conexión a la base de datos.

Una vez comprobados los datos de configuración, se puede iniciar el servidor con el siguiente comando:

```bash
npm start
```

Aunque el servidor se ha configurado para crear la base de datos `db_jero` automáticamente y crear las tablas correspondientes, es posible que se necesite crear esta base de datos manualmente.

**Antes de ello, se recomiendo iniciar el servidor y verificar que la base de datos se crea correctamente.**

## Configuración de CORS

Para permitir la comunicación entre el servidor y el cliente, se utiliza el middleware de CORS.

El archivo `.src/middlewares/cors.js` contiene la configuración necesaria.

En este archivo, se define la configuración de CORS, que incluye los orígenes permitidos (CAMBIAR O AÑADIR MÁS SI EL ENLACE DE CONEXIÓN DE FRONTEND ES DIFERENTE).
