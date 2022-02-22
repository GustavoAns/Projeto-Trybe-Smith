import jwt from 'jsonwebtoken';
import NewUser from '../interfaces/NewUser';
// import User from '../interfaces/User';
import * as userModel from '../models/UserModel';

const createUser = async (data: NewUser) => {
  // const newId = allUsers.length + 1;
  const newId = await userModel.saveUsers(data);
  const payload = { id: newId, username: data.username };
  const token = jwt.sign(payload, 'trybe', {
    algorithm: 'HS256',
  });
  return token;
};

// const getAllUsers = async (): Promise<User[]> => userModel.getAllUsers()

export default {
  createUser,
};