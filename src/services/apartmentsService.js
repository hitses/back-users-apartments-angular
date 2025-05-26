import apartmentModel from '../models/Apartment.js'

class ApartmentsService {
  async initialize() {
    await apartmentModel.sync()
  }

  async create(apartmentData) {
    try {
      return await apartmentModel.create(apartmentData) // <- Crea el apartamento en la base de datos con Sequelize
    } catch (error) {
      throw error
    }
  }

  async findAll() {
    try {
      return await apartmentModel.findAll() // <- Obtiene todos los apartamentos de la base de datos con Sequelize
    } catch (error) {
      throw error
    }
  }

  async find(apartmentId) {
    try {
      const apartment = await apartmentModel.findByPk(apartmentId) // <- Busca un apartamento por su ID en la base de datos con Sequelize

      if (!apartment) throw new Error('Apartment not found')

      return apartment
    } catch (error) {
      throw error
    }
  }

  async update(apartmentId, apartmentData) {
    try {
      const apartment = await this.find(apartmentId) // <- Busca el apartamento por su ID con la función find() de más arriba

      return await apartment.update(apartmentData) // <- Actualiza el apartamento con los nuevos datos en la base de datos con Sequelize
    } catch (error) {
      throw error
    }
  }

  async delete(apartmentId) {
    try {
      const apartment = await this.find(apartmentId) // <- Busca el apartamento por su ID con la función find() de más arriba

      return await apartment.destroy() // <- Elimina el apartamento de la base de datos con Sequelize
    } catch (error) {
      throw error
    }
  }
}

export default ApartmentsService
