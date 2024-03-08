const joi = require("joi");

const LoginSchema = joi.object().keys({
    username: joi.string().required().min(6),
    password: joi.string().required().min(6)
})

module.exports = {
    login: async (req, res)=> {
        try{
            const validate = await LoginSchema.validateAsync(req.body);
        return res.send({
            message: "Login API",
            data: validate
        })
        }catch(error){
            return res.send({
                message: "error",
                error: error.message
            })
        }
    },
    logout: (req, res)=> {
        return res.send({
            message: "Logout Api",
            data: req.body
        })
    }
}