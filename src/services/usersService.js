import userModel from '../models/User.js'

class UsersService {
  async initialize() {
    await userModel.sync()
  }

  async create(userData) {
    try {
      return await userModel.create(userData)
    } catch (error) {
      throw error
    }
  }

  async findAll() {
    try {
      return await userModel.findAll()
    } catch (error) {
      throw error
    }
  }

  async find(userId) {
    try {
      const user = await userModel.findByPk(userId)

      if (!user) throw new Error('User not found')

      return user
    } catch (error) {
      throw error
    }
  }

  async update(userId, userData) {
    try {
      const user = await this.find(userId)

      return await user.update(userData)
    } catch (error) {
      throw error
    }
  }

  async delete(userId) {
    try {
      const user = await this.find(userId)

      return await user.destroy()
    } catch (error) {
      throw error
    }
  }
}

export default UsersService
