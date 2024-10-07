const Joi = require('joi')

module.exports = {
  // POST /api/login
  post: {
    // body: {
      username: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
      email: Joi.string()
        .email()
        .required(),
      name: Joi.string().required(),
      password: Joi.string()
        .min(6)
        .max(12)
        .required(),
      password_confirmation: Joi.string()
        .valid(Joi.ref('password'))
        .required()
        //.options({ language: { any: { allowOnly: 'must match password' } } })
    // }
  }
}
