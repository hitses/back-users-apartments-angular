import createDb from './createDb.js'
import sequelize from './db.js'

import '../models/User.js'
import '../models/Apartment.js'

const connectDb = async () => {
  await createDb()

  try {
    await sequelize.authenticate() // <- Autentica la conexión a la base de datos
    console.log('Connection to the database has been established successfully')

    await sequelize.sync() // <- Sincroniza los modelos con la base de datos, creando las tablas si no existen
    console.log('All tables have been synchronized successfully')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
    throw error
  }
}

export default connectDb
