import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import User from '../interfaces/User';
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

export const getAllProducts = async (): Promise<User[]> => {
  const [data] = await connection.execute('SELECT username FROM Trybesmith.Products');
  return data as User[];
};

export const addOrder = async (productId: number, newOrderId:number) => {
  await connection.execute(
    'UPDATE Trybesmith.Products SET orderId=? WHERE id=?',
    [newOrderId, productId],
  );
  return true;
};
