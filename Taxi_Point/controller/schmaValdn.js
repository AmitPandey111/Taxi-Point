const Joi = require('joi')
const validatorSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
    firstName: Joi.string().required(),
})

function validatorUserSchema(req, res, next) {
    try {
        let validate = validatorSchema.validate(req.body)
        if (validate.error) {
            res.send(validate.error)
        }
        else {
            next()
        }
    }
    catch (err) {
        return err
    }
}

const validatorLoginSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
})
function validatorUserLoginSchema(req, res, next) {
    try {
        let validate = validatorLoginSchema.validate(req.body)
        if (validate.error) {
            res.send(validate.error)
        }
        else {
            next()
        }
    }
    catch (err) {
        return err
    }
}
module.exports={validatorUserSchema,validatorUserLoginSchema}