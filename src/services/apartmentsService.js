import apartmentModel from '../models/Apartment.js'

class ApartmentsService {
  async initialize() {
    await apartmentModel.sync()
  }

  async create(apartmentData) {
    try {
      return await apartmentModel.create(apartmentData)
    } catch (error) {
      throw error
    }
  }

  async findAll() {
    try {
      return await apartmentModel.findAll()
    } catch (error) {
      throw error
    }
  }

  async find(apartmentId) {
    try {
      const apartment = await apartmentModel.findByPk(apartmentId)

      if (!apartment) throw new Error('Apartment not found')

      return apartment
    } catch (error) {
      throw error
    }
  }

  async update(apartmentId, apartmentData) {
    try {
      const apartment = await this.find(apartmentId)

      return await apartment.update(apartmentData)
    } catch (error) {
      throw error
    }
  }

  async delete(apartmentId) {
    try {
      const apartment = await this.find(apartmentId)

      return await apartment.destroy()
    } catch (error) {
      throw error
    }
  }
}

export default ApartmentsService
