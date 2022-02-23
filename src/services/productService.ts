import NewProduct from '../interfaces/NewProduct';
import * as productModel from '../models/productModel';
import Product from '../interfaces/Product';

const createProduct = async (data: NewProduct) => {
  const newId = await productModel.createProduct(data);
  const payload = { item: { id: newId, ...data } };
  return payload;
};

const getAllProducts = async () => {
  const allProducts = await productModel.getAllProducts();
  return allProducts as Product[];
};

export default {
  createProduct,
  getAllProducts,
};