import { SuccessResponse } from "../../helpers/responses.js"

export default{
    async createInvestement (req, res){
        try {
            const {amount} = req.body
            const data = {
                amount,
                bitcoin : (Math.pow(1.05,12)*amount).toFixed(2),
                ethereum: (Math.pow(1.042,12)*amount).toFixed(2),
                cardano : (Math.pow(1.01,12)*amount).toFixed(2),
            }
            const response = new SuccessResponse(200, data)
            return await res.status(response.codeResponse).json(response)
        } catch (error) {
            res.send(error)
        }
    }
}