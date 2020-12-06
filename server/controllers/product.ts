import BaseCtrl from './base';
import Product from '../models/product';

class ProductCtrl extends BaseCtrl {
  model = Product;

  insertMany = async (data) => {
    try{
      return await this.model.insertMany(data);
    } catch (err) {
      console.log(err.toLocaleString());
      return err;
    }
  }

  deleteAll = async () => {
    try{
      return await this.model.deleteMany({});
    } catch (err) {
      console.log(err.toLocaleString());
      return err;
    }
  }

  checkout = async (req, res) => {
    try{
      res.status(200).send(req.body);
    } catch (err) {
      console.log(err.toLocaleString());
      return err;
    }
  }
}

export default ProductCtrl;
