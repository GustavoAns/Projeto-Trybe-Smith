import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import User from '../interfaces/User';
// import DependencesNewOrder from '../interfaces/DependencesNewOrder';
// import LoginUser from '../interfaces/LoginUser';

export const createOrder = async (id:number) => {
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Orders (userId) VALUES (?)', 
    [id],
  );
  const { insertId: orderId } = result;
  return orderId;
};

export const getAllProducts = async (): Promise<User[]> => {
  const [data] = await connection.execute('SELECT username FROM Products');
  return data as User[];
};

export const getOrderbyId = async (): Promise<User[]> => {
  const [data] = await connection.execute('SELECT username FROM Products');
  return data as User[];
};
