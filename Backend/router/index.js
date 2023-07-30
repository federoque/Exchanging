import express from 'express'
import healthRoutes from '../api/health/routes.js'
import criptoRoutes from '../api/criptos/routes.js'
import investmentRoutes from '../api/investment/routes.js'

const router = express.Router()

router.use('/health', healthRoutes)
router.use('/criptos', criptoRoutes)
router.use('/investment', investmentRoutes)

export default router
