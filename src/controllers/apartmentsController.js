import ApartmentsService from '../services/apartmentsService.js'

class ApartmentsController {
  constructor() {
    this.apartmentService = new ApartmentsService()
    this.apartmentService.initialize().catch(err => {
      // Si peta Sequelize al inicializar el servicio, mejor se para a tiempo, capturamos el error y se envía un mensaje de error al usuario
      console.error('Error initializing ApartmentsService')
      throw err
    })
  }

  async create(req, res) {
    try {
      const apartment = await this.apartmentService.create(req.body)
      res.status(201).json(apartment)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  async findAll(_req, res) {
    try {
      const apartments = await this.apartmentService.findAll()
      res.json(apartments)
    } catch (error) {
      res.status(500).json({ error: 'Error getting Apartments' })
    }
  }

  async find(req, res) {
    try {
      const apartment = await this.apartmentService.find(req.params.id)
      res.json(apartment)
    } catch (error) {
      res.status(404).json({ error: error.message }) // Se han usado diferentes códigos de estado HTTP para los errores en las diferentes funciones, pero por mostrarlos, ya que su uso real sería mucho más complejo y detallado
    }
  }

  async update(req, res) {
    try {
      const apartment = await this.apartmentService.update(
        req.params.id,
        req.body
      )
      res.json(apartment)
    } catch (error) {
      res.status(404).json({ error: error.message })
    }
  }

  async delete(req, res) {
    try {
      await this.apartmentService.delete(req.params.id)
      res.status(204).send()
    } catch (error) {
      res.status(404).json({ error: error.message })
    }
  }
}

export default ApartmentsController
