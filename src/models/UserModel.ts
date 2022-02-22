import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import User from '../interfaces/User';
import NewUser from '../interfaces/NewUser';

export const saveUsers = async (data: NewUser) => {
  const { username, classe, level, password } = data;
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO users (username, classe, password, level) VALUES (?, ?, ?, ?)', 
    [username, classe, password, level],
  );
  const { insertId: id } = result;
  return id;
};

export const getAllUsers = async (): Promise<User[]> => {
  const [data] = await connection.execute('SELECT username FROM Users');
  return data as User[];
};
