import DependencesNewOrder from '../interfaces/DependencesNewOrder';
import * as orderModel from '../models/orderModel';
import * as productModel from '../models/productModel';

const createOrder = async (data: DependencesNewOrder) => {
  const { products, id } = data;
  const newOrderId:number = await orderModel.createOrder(id);
  await Promise.all(
    products.map(async (productId:number) => {
      await productModel.addOrder(productId, newOrderId);
    }),
  );
  const payload = { order: { userId: id, products } };
  return payload;
};

export default {
  createOrder,
};