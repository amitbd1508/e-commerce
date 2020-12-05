import * as express from 'express';
import * as jwt from 'jsonwebtoken';

import UserCtrl from './controllers/user';
import ProductCtrl from './controllers/product';
import * as auth from './middleware/authenticator';

function setRoutes(app, passport): void {
  const router = express.Router();
  const productCtrl = new ProductCtrl();
  const userCtrl = new UserCtrl();

  // Users
  router.route('/register').post(auth.register);
  router.route('/login').post(userCtrl.login);

  router.route('/account').get(auth.isJWTValid, userCtrl.currentUser);

  // Products
  router.route('/product').get(auth.isJWTValid, productCtrl.getAll);
  router.route('/product/:id').get(auth.isJWTValid, productCtrl.get);

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}

export default setRoutes;
