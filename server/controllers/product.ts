import BaseCtrl from './base';
import Product from '../models/product';

class ProductCtrl extends BaseCtrl {
  model = Product;

  checkout = async (req, res) => {
    try {
      const cartItems = req.body;
      const user = req.user;

      if (!cartItems || cartItems.length <= 0) {
        res.sendStatus(400);
      }

      // Calculate cart items price
      let totalPrice = 0;
      cartItems.map((cartItem) => {
        totalPrice += cartItem.productPrice;
      });

      res.json({ totalPrice });
    } catch (error) {
      console.log(error.toLocaleString());
      res.sendStatus(500).json(error.toString());
    }
  }

  // For seeding and testing
  insertMany = async (data) => {
    try {
      return await this.model.insertMany(data);
    } catch (err) {
      console.log(err.toLocaleString());
      return err;
    }
  }

  // For seeding and testing
  deleteAll = async () => {
    try {
      return await this.model.deleteMany({});
    } catch (err) {
      console.log(err.toLocaleString());
      return err;
    }
  }
}

export default ProductCtrl;
