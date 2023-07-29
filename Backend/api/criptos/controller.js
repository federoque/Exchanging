import { SuccessResponse, ErrorResponse } from "../../helpers/responses.js" 
import {config} from 'dotenv'
import criptoModel from './model.js'

config()

export default{
    async getBtcMetrics (req, res){
        try {
            const data = await criptoModel.getBtcMetrics()
            const response = new SuccessResponse(data.status, data.data)
            res.status(response.codeResponse).send(response)
        } catch (error) {
            console.log(error)
            const err = new ErrorResponse(error.status || 500, error.code)
            res.status(error.status || 500).send(err)
        }
    },
    async getEthMetrics (req, res){
        try {
            const data = await criptoModel.getEthMetrics()
            const response = new SuccessResponse(data.status, data.data)
            res.status(response.codeResponse).send(response)
        } catch (error) {
            console.log(error)
            const err = new ErrorResponse(error.status || 500, error.code)
            res.status(error.status || 500).send(err)
        }
    },
    async getCardanoMetrics (req, res){
        try {
            const data = await criptoModel.getCardanoMetrics()
            const response = new SuccessResponse(data.status, data.data)
            res.status(response.codeResponse).send(response)
        } catch (error) {
            console.log(error)
            const err = new ErrorResponse(error.status || 500, error.code)
            res.status(error.status || 500).send(err)
        }
    },
}