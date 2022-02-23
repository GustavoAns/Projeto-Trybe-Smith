import { Request, Response, NextFunction } from 'express';
// import ErrorStatus from '../interfaces/ErrorStatus';
const errorMessage = 'Username or password invalid';

const validUsername = async (req: Request, res: Response, next:NextFunction) => {
  const { username } = req.body;
  if (!username) return res.status(400).json({ error: 'Username is required' });
  if (typeof username !== 'string') {
    return res.status(422).json({ error: errorMessage });
  } 
  if (username.length <= 2) {
    return res.status(422).json({ error: errorMessage });
  } 
  return next();
};

const validPassword = async (req: Request, res: Response, next:NextFunction) => {
  const { password } = req.body;
  if (!password) return res.status(400).json({ error: 'Password is required' });
  if (typeof password !== 'string') {
    return res.status(422).json({ error: errorMessage });
  } 
  if (password.length <= 7) {
    return res.status(422).json({ error: errorMessage });
  } 
  return next();
};

export default {
  validUsername,
  validPassword,
};
