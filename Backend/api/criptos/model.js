import axios from '../../helpers/axios.js'

export default {
    async getMetrics(id){
        return await axios.get(`assets/${id}/metrics`)
    },
    async getTimeSeries(id, start, end){
        return await axios.get(`assets/${id}/metrics/price/time-series?start=${start}&end=${end}&interval=1d`)
    },
}