import { Request, Response } from 'express';
import DependencesNewOrder from '../interfaces/DependencesNewOrder';
// import ProductReturn from '../interfaces/ProductReturn';
import orderService from '../services/orderService';

const createOrder = async (req: Request, res: Response) => {
  const userData:DependencesNewOrder = { ...req.body, ...res.locals };
  console.log(userData);

  const newOrder = await orderService.createOrder(userData);
  return res.status(201).json(newOrder);
  // return res.status(201).json({ message: 'WIP' });
};

export default {
  createOrder,
};
