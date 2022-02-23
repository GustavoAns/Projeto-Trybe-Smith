import DependencesNewOrder from '../interfaces/DependencesNewOrder';
import DependencesOrdeerById from '../interfaces/DependencesOrdeerById';
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

const getOrderbyId = async (data: DependencesOrdeerById) => {
  const { orderId, userId } = data;
  const orderIdNum = Number(orderId);
  const acumulador:Array<number> = [];
  const newOrderId = await productModel.getOrderbyId(orderId);

  newOrderId.map((obj) => acumulador.push(obj.id));
  const payload = { id: orderIdNum, userId, products: acumulador };
  return payload;
};

export default {
  createOrder,
  getOrderbyId,
};