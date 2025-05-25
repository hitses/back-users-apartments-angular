import cors from 'cors'

// Configuración de orígenes permitidos (CAMBIAR O AÑADIR MÁS SI EL ENLACE DE CONEXIÓN DE FRONTEND ES DIFERENTE)
const ACCEPTED_ORIGINS = [
  'http://localhost:4200', // Angular
  'http://localhost:5173', // React
  'https://localhost:5500' // Live Server
]

export const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) =>
  cors({
    origin: (origin, callback) => {
      if (acceptedOrigins.includes(origin)) {
        return callback(null, true)
      }

      if (!origin) {
        return callback(null, true)
      }

      return callback(new Error('Not allowed by CORS'))
    }
  })
