import NewProduct from '../interfaces/NewProduct';
import * as productModel from '../models/productModel';

const createProduct = async (data: NewProduct) => {
  const newId = await productModel.createProduct(data);
  const payload = { item: { id: newId, ...data } };
  return payload;
};

export default {
  createProduct,
};