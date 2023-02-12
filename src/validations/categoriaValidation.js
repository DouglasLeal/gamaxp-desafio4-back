const {validate, Joi} = require("express-validation");

const validationRules = {
    body: Joi.object({
        nome: Joi.string().required(),
    })
}

module.exports = validate(validationRules);