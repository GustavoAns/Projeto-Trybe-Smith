import { Request, Response } from 'express';
import ErrorStatus from '../interfaces/ErrorStatus';
// import JWT from '../interfaces/JWT';
// import User from '../interfaces/User';
import newUserSchema from '../schemas/newUserSchemas';
import userService from '../services/userService';

const createUser = async (req: Request, res: Response) => {
  const userData = req.body;
  const { error } = newUserSchema.validate(userData);
  if (error) {
    console.log(error.details[0]);
    return res.status(400).json({ message: error.details[0].message });
  }

  const newUser: string | ErrorStatus = await userService.createUser(userData);
 
  return res.status(200).json(newUser);
};

// const getAllUsers = async (_req: Request, res: Response) => {
//   const allUsers: User[] = await userService.getAllUsers();
//   return res.status(200).json(allUsers);
// }

export default {
  createUser,
};
