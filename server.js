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
    app.use('/users', usersRoutes) // Sustituir por la ruta de la API de tu aplicación

    // Ejecución de la aplicación
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}: http://localhost:${PORT}`)
    })
  } catch (error) {
    console.error('Error serving application:', error)
  }
}

startServer()
