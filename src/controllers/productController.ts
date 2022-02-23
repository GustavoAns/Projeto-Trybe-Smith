import { Request, Response } from 'express';
import ProductReturn from '../interfaces/ProductReturn';
import productService from '../services/productService';
import Product from '../interfaces/Product';

const createProduct = async (req: Request, res: Response) => {
  const userData = req.body;
  const newProduct: ProductReturn = await productService.createProduct(userData);

  return res.status(201).json(newProduct);
};

const getAllProducts = async (_req: Request, res: Response) => {
  const allProducts: Product[] = await productService.getAllProducts();

  return res.status(200).json(allProducts);
};

export default {
  createProduct,
  getAllProducts,
};
