import { Router } from 'express'
const router = Router()
import UsersController from '../controllers/usersController.js'

const usersController = new UsersController()

router.post('/', usersController.create.bind(usersController))
router.get('/', usersController.findAll.bind(usersController))
router.get('/:id', usersController.find.bind(usersController))
router.put('/:id', usersController.update.bind(usersController))
router.delete('/:id', usersController.delete.bind(usersController))

export default router
