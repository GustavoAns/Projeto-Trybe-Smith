import { Request, Response } from 'express';
import ErrorStatus from '../interfaces/ErrorStatus';
// import JWT from '../interfaces/JWT';
// import User from '../interfaces/User';
import newUserSchema from '../schemas/newUserSchemas';
import userService from '../services/userService';

const createUser = async (req: Request, res: Response) => {
  const userData = req.body;
  // console.log(userData);
  
  const { error } = newUserSchema.validate(userData);
  if (error) {
    // console.log(error.details[0]);
    // console.log(error.details[0].message.search('required') === -1);
    if (error.details[0].message.search('required') === -1) {
      return res.status(422).json({ message: error.details[0].message });
    } 
    return res.status(400).json({ message: error.details[0].message });
  }

  const newToken: string | ErrorStatus = await userService.createUser(userData);
 
  // console.log(newToken);
  
  return res.status(200).json(newToken);
};

const loginUser = async (req: Request, res: Response) => {
  const userData = req.body;
  const newToken: string | number = await userService.loginUser(userData);
  if (newToken === -1) {
    return res.status(404).json({ message: 'usuario nao ncontrado' });
  }
  return res.status(200).json(newToken);
};

export default {
  createUser,
  loginUser,
};
