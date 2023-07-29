import express from 'express'
import healthRoutes from '../api/health/routes.js'
import criptoRoutes from '../api/criptos/routes.js'

const router = express.Router()

router.use('/health', healthRoutes)
router.use('/criptos', criptoRoutes)

export default router
