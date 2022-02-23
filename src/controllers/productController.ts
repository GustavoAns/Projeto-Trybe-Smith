import { Request, Response } from 'express';
import ProductReturn from '../interfaces/ProductReturn';
import productService from '../services/productService';

const createProduct = async (req: Request, res: Response) => {
  const userData = req.body;
  const newProduct: ProductReturn = await productService.createProduct(userData);

  return res.status(201).json(newProduct);
};

export default {
  createProduct,
};
