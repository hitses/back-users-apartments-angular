import cors from 'cors'

// Configuración de orígenes permitidos (CAMBIAR O AÑADIR MÁS SI EL ENLACE DE CONEXIÓN DE FRONTEND ES DIFERENTE)
const ACCEPTED_ORIGINS = [
  'http://localhost:4200', // Angular
  'http://localhost:5173', // React (no está más abajo por respeto a quien me ha dado clase de esta colección de bibliotecas, pero Angular es mejor)
  'https://localhost:5500' // Live Server
]

export const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) =>
  cors({
    origin: (origin, callback) => {
      if (acceptedOrigins.includes(origin)) {
        return callback(null, true) // Si el origen está en la lista de orígenes permitidos, se permite la solicitud
      }

      if (!origin) {
        return callback(null, true) // Si no hay origen (por ejemplo, en solicitudes desde Postman o cURL), también se permite la solicitud
      }

      return callback(new Error('Not allowed by CORS')) // Si el origen no está en la lista de orígenes permitidos, se rechaza la solicitud y se envía un mensaje de error para avisar al usuario (que, recordemos, es superdotado)
    }
  })
