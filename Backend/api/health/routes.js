import express from 'express'
import healthController from './controller.js'

const router = express.Router()

router.get('/', healthController.healthCheck)

export default router
