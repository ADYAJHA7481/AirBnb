const Joi = require('joi');

module.exports.listeningSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        location: Joi.string().required(),
        country: Joi.string().required(),
        price: Joi.number().required().min(0),
        Image: Joi.string().allow("",null)
    }).required()
});