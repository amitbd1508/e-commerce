import BaseCtrl from './base';
import Product from '../models/product';

class ProductCtrl extends BaseCtrl {
  model = Product;

  insertAll = async (data) => {
    try{
      return await this.model.insertMany(data);
    } catch (err) {
      console.log(err.toLocaleString());
      return err;
    }
  }

  checkout = async (req, res) => {
    try{
      console.log(req.user);
      console.log(req.body);

      res.send(req.body);
    } catch (err) {
      console.log(err.toLocaleString());
      return err;
    }
  }

}

export default ProductCtrl;
