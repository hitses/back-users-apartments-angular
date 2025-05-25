import UsersService from '../services/usersService.js'

class UsersController {
  constructor() {
    this.userService = new UsersService()
    this.userService.initialize().catch(err => {
      console.error('Error initializing UsersService')
      throw err
    })
  }

  async create(req, res) {
    try {
      const user = await this.userService.create(req.body)
      res.status(201).json(user)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  async findAll(_req, res) {
    try {
      const users = await this.userService.findAll()
      res.json(users)
    } catch (error) {
      res.status(500).json({ error: 'Error getting Cards' })
    }
  }

  async find(req, res) {
    try {
      const user = await this.userService.find(req.params.id)
      res.json(user)
    } catch (error) {
      res.status(404).json({ error: error.message })
    }
  }

  async update(req, res) {
    try {
      const user = await this.userService.update(req.params.id, req.body)
      res.json(user)
    } catch (error) {
      res.status(404).json({ error: error.message })
    }
  }

  async delete(req, res) {
    try {
      await this.userService.delete(req.params.id)
      res.status(204).send()
    } catch (error) {
      res.status(404).json({ error: error.message })
    }
  }
}

export default UsersController
