import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import Product from '../interfaces/Product';
import NewProduct from '../interfaces/NewProduct';
// import LoginUser from '../interfaces/LoginUser';

export const createProduct = async (data: NewProduct) => {
  const { name, amount } = data;
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)', 
    [name, amount],
  );
  const { insertId: id } = result;
  return id;
};

export const getAllProducts = async (): Promise<Product[]> => {
  const [data] = await connection.execute('SELECT * FROM Trybesmith.Products');
  return data as Product[];
};

export const addOrder = async (productId: number, newOrderId:number) => {
  await connection.execute(
    'UPDATE Trybesmith.Products SET orderId=? WHERE id=?',
    [newOrderId, productId],
  );
  return true;
};
