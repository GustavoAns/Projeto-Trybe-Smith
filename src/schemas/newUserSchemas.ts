import joi from 'joi';

const passwordMin7 = 'Password must be longer than 7 characters';

const newUserSchema = joi.object({
  username: joi.string().min(7).required(),
  classe: joi.string().min(2).required(),
  level: joi.number().greater(0).required(),
  password: joi.string().min(8).rule({ message: passwordMin7 }).required(),
});

export default newUserSchema;