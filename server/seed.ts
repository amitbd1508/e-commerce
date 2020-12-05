import setMongo from './mongo';
import * as dotenv from 'dotenv';
dotenv.config();

import ProductCtrl from './controllers/product';


const productsData = [
  {
    id: 1,
    name: 'T-Shirt',
    price: '500',
    available: true,
    variants: [
      {
        color: 'white',
        size: ['large', 'medium', 'extra-large'],
        quantity: 3
      },
      {
        color: 'red',
        size: ['small', 'medium'],
        quantity: 7
      }
    ]
  },
  {
    id: 2,
    name: 'Jeans',
    price: '1000',
    available: true,
    variants: [
      {
        color: 'white',
        size: ['large', 'extra-large'],
        quantity: 5
      },
      {
        color: 'blue',
        size: ['small', 'medium'],
        quantity: 10
      }
    ]
  },
  {
    id: 3,
    name: 'Shirt',
    price: '1500',
    available: true,
    variants: [
      {
        color: 'black',
        size: ['large', 'extra-large'],
        quantity: 5
      },
      {
        color: 'white',
        size: ['small', 'medium'],
        quantity: 3
      }
    ]
  },
  {
    id: 4,
    name: 'Pant',
    price: '2000',
    available: true,
    variants: [
      {
        color: 'black',
        size: ['large', 'extra-large'],
        quantity: 5
      },
      {
        color: 'white',
        size: ['small', 'medium'],
        quantity: 3
      }
    ]
  },
  {
    id: 5,
    name: 'Cap',
    price: '200',
    available: false,
    variants: [
      {
        color: 'black',
        size: ['large', 'extra-large'],
        quantity: 5
      },
      {
        color: 'white',
        size: ['small', 'medium'],
        quantity: 3
      }
    ]
  },
  {
    id: 6,
    name: 'Half Pant',
    price: '800',
    available: true,
    variants: [
      {
        color: 'black',
        size: ['large', 'extra-large'],
        quantity: 5
      },
      {
        color: 'white',
        size: ['small', 'medium'],
        quantity: 3
      }
    ]
  },
  {
    id: 7,
    name: 'Hoddy',
    price: '3000',
    available: false,
    variants: [
      {
        color: 'black',
        size: ['large', 'extra-large'],
        quantity: 2
      },
      {
        color: 'white',
        size: ['small', 'medium'],
        quantity: 3
      }
    ]
  },
];


async function seed(): Promise<any> {
  try {
    await setMongo();
    const productCtrl = new ProductCtrl();

    await productCtrl.insertAll(productsData);
    console.log('Product seeding completed');

  } catch (err) {
    console.error(err);
  }
}

seed();
