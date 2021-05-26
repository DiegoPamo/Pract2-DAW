// documentation https://joi.dev/api/?v=17.4.0

import Joi from 'joi'

export const schemaName = Joi.object({
  name: Joi.string()
    .min(3)
    .max(30)
    .required(),
  number: Joi.string()
    .min(3)
    .max(30)
    .required()
})
