import express from 'express'
import criptoController from './controller.js'


const router = express.Router()

router.get('/btc', criptoController.getBtcMetrics)
router.get('/eth',criptoController.getEthMetrics)
router.get('/cardano', criptoController.getCardanoMetrics)

export default router
