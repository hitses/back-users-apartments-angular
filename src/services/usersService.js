import userModel from '../models/User.js'

class UsersService {
  async initialize() {
    await userModel.sync()
  }

  async create(userData) {
    /*
      No se han realizado validaciones de datos, puesto que es un ejemplo de servicio los usuarios que van a usar el servicio son superdotados.
      Lo único que se ha hecho es pasar a minúsculas los campos username, firstName, lastName y email.
      En un servicio real tengo la fea costumbre de usar la mayor parte de los métodos de la clase (sí, uso clases, no funciones) para validar los datos de entrada y, si no son válidos, lanzar un error puesto que también uso la configuración de validación de Whitelist.
    */
    userData.username = userData.username.toLowerCase()
    userData.firstName = userData.firstName.toLowerCase()
    userData.lastName = userData.lastName.toLowerCase()
    userData.email = userData.email.toLowerCase()

    try {
      return await userModel.create(userData) // <- Crea el usuario en la base de datos con Sequelize
    } catch (error) {
      throw error
    }
  }

  async findAll() {
    try {
      return await userModel.findAll() // <- Obtiene todos los usuarios de la base de datos con Sequelize
    } catch (error) {
      throw error
    }
  }

  async find(userId) {
    try {
      const user = await userModel.findByPk(userId) // <- Busca un usuario por su ID en la base de datos con Sequelize

      if (!user) throw new Error('User not found')

      return user
    } catch (error) {
      throw error
    }
  }

  async update(userId, userData) {
    try {
      const user = await this.find(userId) // <- Busca el usuario por su ID con la función find() de más arriba

      return await user.update(userData) // <- Actualiza el usuario con los nuevos datos en la base de datos con Sequelize
    } catch (error) {
      throw error
    }
  }

  /*
    Otra mala costumbre que tengo a la hora de eliminar registros o documentos (Mongo-guiño) es no eliminar el registro o documento, sino marcarlo como eliminado con una propiedad booleana y así no romper la integridad referencial de la base de datos o, para lo que realmente lo uso, mantener los datos para luego hacer sondeos o estadísticas de uso de la aplicación y así poder mejorarla en el futuro.
    En este caso, como es un ejemplo de servicio, se elimina el usuario de la base de datos y a otra cosa, puesto que no existen relaciones entre los usuarios y los apartamentos.
  */
  async delete(userId) {
    try {
      const user = await this.find(userId) // <- Busca el usuario por su ID con la función find() de más arriba

      return await user.destroy() // <- Elimina el usuario de la base de datos con Sequelize
    } catch (error) {
      throw error
    }
  }
}

export default UsersService
