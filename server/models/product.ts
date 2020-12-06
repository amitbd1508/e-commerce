import * as mongoose from 'mongoose';

const variantSchema = new mongoose.Schema({
  color: String,
  size: {
    type: [String],
    enum: ['small', 'medium', 'large', 'extra-large']
  },
  quantity: {
    type: Number,
    required: true,
    validate: {
      validator: Number.isInteger,
      message: '{VALUE} is not an integer value'
    }
  }
});

const productSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    required: true,
    validate: {
      validator: Number.isInteger,
      message: '{VALUE} is not an integer value'
    }
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  available: {
    type: Boolean,
    required: true
  },
  variants: [variantSchema]
}).set('autoIndex', true)
  .set('minimize', false)
  .set('timestamps', true);

const Product = mongoose.model('Products', productSchema);

export default Product;
