
const asyncHandler = (fn) => async(req, res, next) => {
    try {
        await fn(req, res, next)
    } catch (error) {
        console.error("ERROR: ", error)
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }   
}

const asynchandler = (fn) => {
    (req, res, next) => {
        promise.resolve(fn(req, res, next)).catch(next)
    }
}

export {asyncHandler, asyncHandlerWithError}