import express from 'express'
import criptoController from './controller.js'


const router = express.Router()

router.get('/', criptoController.getCriptoData)

export default router
