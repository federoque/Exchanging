import { SuccessResponse } from "../../helpers/responses.js"

export default{
    async healthCheck (req, res){
        try {
            const response = new SuccessResponse(200, "success", "health ok!")
            return await res.status(response.codeResponse).json(response)
        } catch (error) {
            res.send(error)
        }
    }
}