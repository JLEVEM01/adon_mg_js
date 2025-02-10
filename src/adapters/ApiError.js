

export class ApiError extends Error{
    constructor(statusCode, message){
        super(message)
        this.statusCode = statusCode
    }

    static badRequet(msg){
        return new ApiError(400, msg)
    }

    static notFound(msg){
        return new ApiError(404, msg)
    }

    static InternalServer(msg){
        return new ApiError(500, msg)
    }
}