import { SuccessResponse, ErrorResponse } from "../../helpers/responses.js" 
import {config} from 'dotenv'
import criptoModel from './model.js'
import { btcId, ethId, cardanoId, formatNow, formatOneWeekBefore } from "../../helpers/constans.js"
import { metricFormat, timeSeriesFormat } from "../../helpers/formatData.js"

config()


export default{
    async getBtcMetrics (req, res){
        try {
            const data = await criptoModel.getMetrics(btcId)
            const formatData = metricFormat(data.data)
            const response = new SuccessResponse(data.status, formatData)
            res.status(response.codeResponse).send(response)
        } catch (error) {
            console.log(error)
            const err = new ErrorResponse(error.status || 500, error.code)
            res.status(error.status || 500).send(err)
        }
    },
    async getEthMetrics (req, res){
        try {
            const data = await criptoModel.getMetrics(ethId)
            const formatData = metricFormat(data.data)
            const response = new SuccessResponse(data.status, formatData)
            res.status(response.codeResponse).send(response)
        } catch (error) {
            console.log(error)
            const err = new ErrorResponse(error.status || 500, error.code)
            res.status(error.status || 500).send(err)
        }
    },
    async getCardanoMetrics (req, res){
        try {
            const data = await criptoModel.getMetrics(cardanoId)
            const formatData = metricFormat(data.data)
            const response = new SuccessResponse(data.status, formatData)
            res.status(response.codeResponse).send(response)
        } catch (error) {
            console.log(error)
            const err = new ErrorResponse(error.status || 500, error.code)
            res.status(error.status || 500).send(err)
        }
    },
    async getBtcTimeSeries (req, res){
        try {
            const data = await criptoModel.getTimeSeries(btcId, formatOneWeekBefore, formatNow)
            const formatData = timeSeriesFormat(data.data)
            const response = new SuccessResponse(data.status, formatData)
            res.status(response.codeResponse).send(response)
        } catch (error) {
            console.log(error)
            const err = new ErrorResponse(error.status || 500, error.code)
            res.status(error.status || 500).send(err)
        }
    },
    async getEthTimeSeries (req, res){
        try {
            const data = await criptoModel.getTimeSeries(ethId, formatOneWeekBefore, formatNow)
            const formatData = timeSeriesFormat(data.data)
            const response = new SuccessResponse(data.status, formatData)
            res.status(response.codeResponse).send(response)
        } catch (error) {
            console.log(error)
            const err = new ErrorResponse(error.status || 500, error.code)
            res.status(error.status || 500).send(err)
        }
    },
    async getCardanoTimeSeries (req, res){
        try {
            const data = await criptoModel.getTimeSeries(cardanoId, formatOneWeekBefore, formatNow)
            const formatData = timeSeriesFormat(data.data)
            const response = new SuccessResponse(data.status, formatData)
            res.status(response.codeResponse).send(response)
        } catch (error) {
            console.log(error)
            const err = new ErrorResponse(error.status || 500, error.code)
            res.status(error.status || 500).send(err)
        }
    },
    async getAllData (req, res) {
       try {
        const btc= await criptoModel.getMetrics(btcId)
        const btcformatData = metricFormat(btc.data)
        const eth = await criptoModel.getMetrics(ethId)
        const ethformatData = metricFormat(eth.data)
        const cardano = await criptoModel.getMetrics(cardanoId)
        const cardanoformatData = metricFormat(cardano.data)

        const btctimeseries = await criptoModel.getTimeSeries(btcId, formatOneWeekBefore, formatNow)
        const formatBtcTimeseries = timeSeriesFormat(btctimeseries.data)
        const ethtimeseries = await criptoModel.getTimeSeries(ethId, formatOneWeekBefore, formatNow)
        const formatEthTimeseries = timeSeriesFormat(ethtimeseries.data)
        const cardanotimeseries = await criptoModel.getTimeSeries(cardanoId, formatOneWeekBefore, formatNow)
        const formatCardanoTimeseries = timeSeriesFormat(cardanotimeseries.data)
        const data = [
            {data:btcformatData, time_series: formatBtcTimeseries.time_series}, 
            {data:ethformatData, time_series: formatEthTimeseries.time_series}, 
            {data:cardanoformatData, time_series: formatCardanoTimeseries.time_series}, 
        ]
        const response = new SuccessResponse(200, data)
        res.status(response.codeResponse).send(response)
       } catch (error) {
        console.log(error)
        const err = new ErrorResponse(error.status || 500, error.code)
        res.status(error.status || 500).send(err)
       } 
    }
}