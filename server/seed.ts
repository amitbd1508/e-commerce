import setMongo from './mongo';
import * as dotenv from 'dotenv';

import ProductCtrl from './controllers/product';
import { products } from './seed/product.seed';

dotenv.config();

async function seed(): Promise<void> {
  try {
    await setMongo();
    const productCtrl = new ProductCtrl();

    await productCtrl.deleteAll();
    await productCtrl.insertMany(products);
    console.log('Seed: Product seeding completed');

  } catch (err) {
    console.error(`Seed: ${err.toString()}`);
  }
}

seed();
