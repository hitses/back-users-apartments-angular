import createDb from './createDb.js'
import sequelize from './db.js'

const connectDb = async () => {
  await createDb()

  try {
    await sequelize.authenticate()
    console.log('Connection to the database has been established successfully')

    await sequelize.sync()
    console.log('All tables have been synchronized successfully')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
    throw error
  }
}

export default connectDb
