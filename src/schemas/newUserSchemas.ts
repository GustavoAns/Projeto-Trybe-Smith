import joi from 'joi';

const newUserSchema = joi.object({
  username: joi.string().min(2).required(),
  classe: joi.string().min(2).required(),
  level: joi.number().greater(0).required(),
  password: joi.string().min(7).required(),
});

export default newUserSchema;