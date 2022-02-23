import { Request, Response, NextFunction } from 'express';
// import ErrorStatus from '../interfaces/ErrorStatus';

const validProducts = async (req: Request, res: Response, next:NextFunction) => {
  const { products } = req.body;
  if (!products) return res.status(400).json({ error: 'Products is required' });
  if (Array.isArray(products) === false) {
    return res.status(422).json({ error: 'Products must be an array of numbers' });
  } 
  if (products.length <= 0) {
    return res.status(422).json({ error: 'Products can\'t be empty' });
  } 
  return next();
};

export default {
  validProducts,
};
