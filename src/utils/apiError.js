class Api extends Error {
    constructor(
        message = "Something went wrong", 
        statusCode,
        errors = [],
        stack = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.errors = errors
        this.stack = stack
        this.success = false
        this.data = null
        
        if (statck) { 
            this.stack = stack
        } else {
            error.captureStackTrace(this, this.constructor)
        }

    }

}
