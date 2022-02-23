import express from 'express';
import userController from './controllers/userController';
import productController from './controllers/productController';
import orderController from './controllers/orderController';
import validCreateUser from './middlewares/validCreateUser';
import validLoginUser from './middlewares/validLoginUser';
import validToken from './middlewares/validToken';
import validCreateProduct from './middlewares/validCreateProduct';
import validCreateorder from './middlewares/validCreateorder';

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
app.post(
  '/products',
  validToken,
  validCreateProduct.validName,
  validCreateProduct.validAmount,
  productController.createProduct,
);
app.get(
  '/products',
  validToken,
  productController.getAllProducts,
);
app.post(
  '/orders',
  validToken,
  validCreateorder.validProducts,
  orderController.createOrder,
);
app.get(
  '/orders/:id',
  validToken,
  orderController.getOrderbyId,
); 

export default app;
