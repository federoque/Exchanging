import axios from '../../helpers/axios.js'

export default {
    async getBtcMetrics(){
        return await axios.get(`assets/1e31218a-e44e-4285-820c-8282ee222035/metrics`)
    },
    async getEthMetrics(){
        return await axios.get(`assets/21c795f5-1bfd-40c3-858e-e9d7e820c6d0/metrics`)
    },
    async getCardanoMetrics(){
        return await axios.get(`assets/362f0140-ecdd-4205-b8a0-36f0fd5d8167/metrics`)
    }
}