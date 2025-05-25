import { Router } from 'express'
const router = Router()
import ApartmentsController from '../controllers/apartmentsController.js'

const apartmentsController = new ApartmentsController()

router.post('/', apartmentsController.create.bind(apartmentsController))
router.get('/', apartmentsController.findAll.bind(apartmentsController))
router.get('/:id', apartmentsController.find.bind(apartmentsController))
router.put('/:id', apartmentsController.update.bind(apartmentsController))
router.delete('/:id', apartmentsController.delete.bind(apartmentsController))

export default router
