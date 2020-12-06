import * as chai from 'chai';
import chaiHttp = require('chai-http');
import { describe, it } from 'mocha';

process.env.NODE_ENV = 'test';
import { app } from '../app';
import User from '../models/user';
import * as jwt from 'jsonwebtoken';

chai.use(chaiHttp).should();

function generateAccessToken(user): any {
  return jwt.sign({
    _id: user._id,
    name: user.name,
    email: user.email
  }, process.env.SECRET_TOKEN, {
    expiresIn: '7d',
    issuer: user._id.toString()
  });
}
describe('Users', () => {

  beforeEach(done => {
    User.remove({}, err => {
      done();
    });
  });

  describe('Backend tests for users', () => {
    it('should get register a new user', done => {
      chai.request(app)
        .post('/api/register')
        .send({name: 'Amit Test', email: 'testuser@test.com', password: 'amit123456'})
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.a.property('id');
          res.body.should.have.a.property('email');
          res.body.should.have.a.property('token');
          done();
        });
    });

    it('should not get log in a user', done => {
      chai.request(app)
        .post('/api/login')
        .send({email: 'user@test.com', password: 'amit123456'})
        .end((err, res) => {
          res.should.have.status(401);
          done();
        });
    });

    it('should not get current account', done => {
      chai.request(app)
        .get('/api/account')
        .end((err, res) => {
          res.should.have.status(401);
          done();
        });
    });
  });

});


