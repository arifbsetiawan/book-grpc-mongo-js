const callback = {
    err400: (message = "Bad Request") => {
        return {
            code: 400,
            message,
        }
    },
    err404: (message = "Not Found") => {
        return {
            code: 404,
            message,
        }
    },
    err500: (message = "Internal Server Error") => {
        return {
            code: 500,
            message,
        }
    },
}

module.exports = callback;