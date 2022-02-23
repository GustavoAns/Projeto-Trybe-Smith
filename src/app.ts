import express from 'express';
import userController from './controllers/userController';
import validCreateUser from './middlewares/validCreateUser';
import validLoginUser from './middlewares/validLoginUser';

const app = express();

app.use(express.json());
// vamo q vamo
app.post(
  '/users',
  validCreateUser.validUsername,
  validCreateUser.validClasse,
  validCreateUser.validLevel,
  validCreateUser.validPassword,
  userController.createUser,
);
app.post(
  '/login',
  validLoginUser.validUsername,
  validLoginUser.validPassword,
  userController.loginUser,
);

export default app;
