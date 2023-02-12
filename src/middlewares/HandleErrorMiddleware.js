const { UnauthorizedError } = require("express-jwt");
const { ValidationError } = require("express-validation");

class HandleErrorMiddleware {
    static handle(error, req, res, next) {
        if (error instanceof ValidationError) {
            return res.status(error.statusCode).json(error);
        }

        if (error instanceof UnauthorizedError) {
            return res.status(error.statusCode).json(error);
        }

        return res.status(500).json(error);
    }
}

module.exports = HandleErrorMiddleware;