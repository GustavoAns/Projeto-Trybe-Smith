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

const getOrderbyId = async (_data:object) => {
  // const { orderId, userId } = data;
  // const newOrderId:number = await orderModel.getOrderbyId(id);
  // await Promise.all(
  //   products.map(async (productId:number) => {
  //     await productModel.addOrder(productId, newOrderId);
  //   }),
  // );
  // const payload = { order: { userId: id, products } };
  const payload = { message: 'WIP' };
  return payload;
};

export default {
  createOrder,
  getOrderbyId,
};