
export const errorMiddleware = (err, req, res, next) => {

    const statusCode = err.statusCode || 500
    const message = err.message || "Internal server Error"

    res.status(err.statusCode).json({
        success: false,
        status : statusCode,
        message: message
    })
} 