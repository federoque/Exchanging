
export class SuccessResponse {
    constructor(codeResponse, data){
        this.codeResponse= codeResponse,
        this.message= "success",
        this.data=data
    }
}

export class ErrorResponse{
    constructor(status, message){
        this.response="error"
        this.status = status,
        this.message = message
    }
}
