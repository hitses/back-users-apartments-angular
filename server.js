import express, { json } from 'express'
import 'dotenv/config'
import connectDb from './src/config/connectDb.js'
import { corsMiddleware } from './src/middlewares/cors.js'

const startServer = async () => {
  try {
    // Conexión a la base de datos
    await connectDb()

    // Configuración de la aplicación
    const app = express()
    // Asignación de puerto
    const PORT = process.env.PORT ?? 4000

    // Configuración de middlewares
    app.use(corsMiddleware()) // CORS para permitir solicitudes de origen
    app.use(json()) // JSON para serializar y deserializar datos
    app.disable('x-powered-by') // Desactiva el header X-Powered-By, aumentando la seguridad

    // Rutas
    const usersRoutes = (await import('./src/routes/usersRoutes.js')).default
    const apartmentsRoutes = (await import('./src/routes/apartmentsRoutes.js'))
      .default

    // Asignación de rutas a la aplicación
    app.use('/users', usersRoutes)
    app.use('/apartments', apartmentsRoutes)

    /*
      Ejecución de la aplicación - OBTENER ENLACE DE CONEXIÓN DESDE LA CONSOLA
      http://localhos:4000 <- Enlace de conexión por defecto
      http://localhost:3000 <- Enlace de conexión si se establece el puerto en 3000 en .env
      En el proyecto de Angular enlazado en el README de este proyecto se usa la conexión para el puerto 3000, por lo que se recomienda establecer el puerto en 3000 en el archivo .env
      Igualmente se ha creado una variable de entorno en el proyecto de Angular para no tener que cambiar dicho puerto en varios archivos, sino sólo en el de entornos, todo explicado en el README del proyecto de Angular
    */
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}: http://localhost:${PORT}`)
    })
  } catch (error) {
    console.error('Error serving application:', error)
  }
}

startServer()
