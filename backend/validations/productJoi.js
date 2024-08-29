const Joi = require('joi');

const ProductJoi = Joi.object(
{
    title:Joi.string()
      .alphanum()
      .min(3)
      .max(30)
      .required(),
    category:Joi.string()
    .min(3)
      .max(30)
      .required(),
    description:Joi.string()
      .min(3)
      .required(),
    image:Joi.string()
      .required(),
    quantity:Joi.number()
      .integer()
      .min(0),

}
)
module.exports=ProductJoi;