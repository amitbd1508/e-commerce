import * as chai from 'chai';
import {after, before, describe, it} from 'mocha';

// Setting environment to test
process.env.NODE_ENV = 'test';

import {app} from '../app';
import User from '../models/user';
import chaiHttp = require('chai-http');
import Product from '../models/product';

chai.use(chaiHttp).should();

const testUser1 = {name: 'Amit Ghosh', email: 'test@test.com', password: 'strong_password'};
const products = [
  {
    id: 1,
    name: 'T-Shirt',
    price: '250',
    available: true,
    variants: [
      {
        color: 'white',
        size: [
          'large',
          'medium',
          'extra-large'
        ],
        quantity: 3
      },
      {
        color: 'red',
        size: [
          'small',
          'medium'
        ],
        quantity: 7
      }
    ]
  },
  {
    id: 2,
    name: 'Jeans',
    price: '500',
    available: false,
    variants: [
      {
        color: 'blue',
        size: [
          'large',
          'extra-large'
        ],
        quantity: 3
      },
      {
        color: 'red',
        size: [
          'small',
          'medium'
        ],
        quantity: 7
      }
    ]
  }
];

describe('Products API', () => {

  let token = '';

  before((done) => {
    // Register a user for getting token
    chai.request(app)
      .post('/api/register')
      .send(testUser1)
      .end((err, res) => {
        token = res.body.token;
        done();
      });

    Product.insertMany(products);
  });

  after(() => {
    // Remove all user test data for next use
    User.deleteMany({}, err => {
    });
    Product.deleteMany({}, err => {
    });
  });


  describe('Backend tests for products', () => {

    it('should get all products', done => {
      chai.request(app)
        .get('/api/product')
        .set({Authorization: `Bearer ${token}`})
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.should.be.length(2);
          done();
        });
    });

    it('should not get products for missing authentication', done => {
      chai.request(app)
        .get('/api/product')
        .end((err, res) => {
          res.should.have.status(401);
          done();
        });
    });

    it('should get a product', done => {
      chai.request(app)
        .get('/api/product/1')
        .set({Authorization: `Bearer ${token}`})
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.a.property('price');
          res.body.should.have.a.property('available');
          res.body.should.have.a.property('variants');
          done();
        });
    });
  });

  it('should not get a product', done => {
    chai.request(app)
      .get('/api/product/10')
      .set({Authorization: `Bearer ${token}`})
      .end((err, res) => {
        res.should.have.status(400);
        done();
      });
  });
});


