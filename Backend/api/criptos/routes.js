import express from 'express'
import criptoController from './controller.js'


const router = express.Router()

router.get('/btc', criptoController.getBtcMetrics)
router.get('/eth',criptoController.getEthMetrics)
router.get('/cardano', criptoController.getCardanoMetrics)
router.get('/btctimeseries', criptoController.getBtcTimeSeries)
router.get('/ethtimeseries', criptoController.getEthTimeSeries)
router.get('/cardanotimeseries', criptoController.getCardanoTimeSeries)
router.get('/', criptoController.getAllData)

export default router
