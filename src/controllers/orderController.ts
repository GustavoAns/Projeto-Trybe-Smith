import { Request, Response } from 'express';
import DependencesNewOrder from '../interfaces/DependencesNewOrder';
import ReturnOrderById from '../interfaces/ReturnOrderById';
// import ErrorNotFound from '../interfaces/ErrorNotFound';
import orderService from '../services/orderService';

const createOrder = async (req: Request, res: Response) => {
  const userData:DependencesNewOrder = { ...req.body, ...res.locals };
  console.log(userData);

  const newOrder = await orderService.createOrder(userData);
  return res.status(201).json(newOrder);
  // return res.status(201).json({ message: 'WIP' });
};

const getOrderbyId = async (req: Request, res: Response) => {
  const userData = { orderId: req.params.id, userId: res.locals.id };

  const newOrder: ReturnOrderById = await orderService.getOrderbyId(userData);
  if (newOrder.products.length <= 0) {
    return res.status(404).json({ error: 'Order not found' });
  }
  return res.status(200).json(newOrder);
  // return res.status(201).json({ message: 'WIP' });
};

export default {
  createOrder,
  getOrderbyId,
};
