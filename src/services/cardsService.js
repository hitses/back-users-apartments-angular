// Archivo de prueba
import cardModel from '../models/Card.js'

class CardsService {
  async initialize() {
    await cardModel.sync()
  }

  // Método para obtener todas las tarjetas
  async getAllCards() {
    try {
      return await cardModel.findAll()
    } catch (error) {
      throw error
    }
  }

  // Método para obtener una tarjeta por ID
  async getCardById(cardId) {
    try {
      const card = await cardModel.findByPk(cardId)

      if (!card) throw new Error('Card not found')

      return card
    } catch (error) {
      throw error
    }
  }

  // Método para crear una tarjeta
  async createCard(cardData) {
    try {
      return await cardModel.create(cardData)
    } catch (error) {
      throw error
    }
  }

  // Método para actualizar una tarjeta por ID
  async updateCard(cardId, cardData) {
    try {
      const card = await this.getCardById(cardId)

      if (!card) throw new Error('Card not found')

      return await card.update(cardData)
    } catch (error) {
      throw error
    }
  }

  // Método para eliminar una tarjeta por ID
  async deleteCard(cardId) {
    try {
      const card = await this.getCardById(cardId)

      if (!card) throw new Error('Card not found')

      return await card.destroy()
    } catch (error) {
      throw error
    }
  }
}

export default CardsService
