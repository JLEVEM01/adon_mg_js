

export const errorMiddleare = (err, req, res, next) => {

    const statusCode = err.statusCode || 500
    const message = err.message || "Internal server Error"

    res.status(statusCode).json({
        success : "error",
        statusCode,
        message
    })
} 