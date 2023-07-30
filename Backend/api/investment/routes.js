import express from 'express'
import investmentController from './controller.js'

const router = express.Router()

router.post('/', investmentController.createInvestement)

export default router