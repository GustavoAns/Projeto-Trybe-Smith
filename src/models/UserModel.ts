import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import User from '../interfaces/User';
import NewUser from '../interfaces/NewUser';
import LoginUser from '../interfaces/LoginUser';

export const saveUsers = async (data: NewUser) => {
  const { username, classe, level, password } = data;
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Users (username, classe, password, level) VALUES (?, ?, ?, ?)', 
    [username, classe, password, level],
  );
  const { insertId: id } = result;
  return id;
};

export const loginUser = async (data: LoginUser) => {
  const { username, password } = data;
  const [retorno] = await connection.execute(
    'SELECT * FROM Trybesmith.Users WHERE username=? AND password=?', 
    [username, password],
  );
  const [row] = retorno as User[];

  if (!row) {
    return -1;
  }
  return row.id;
};

export const getAllUsers = async (): Promise<User[]> => {
  const [data] = await connection.execute('SELECT username FROM Users');
  return data as User[];
};
