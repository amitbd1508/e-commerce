import * as jwt from 'jsonwebtoken';

import User from '../models/user';
import BaseCtrl from './base';
import * as Util from '../util/util';

class UserCtrl extends BaseCtrl {
  model = User;

  login = (req, res) => {
    this.model.findOne({email: req.body.email}, (err, doc) => {
      if (err) {
        return res.sendStatus(500);
      }

      if (!doc || !doc.validPassword(req.body.password)) {
        return res.status(401).send('Invalid email or password.');
      }

      res.cookie('token', Util.generateAccessToken(doc), {
        expires: new Date(Date.now() + 8.64e+7),
        httpOnly: true
      });

      res.status(200).json(Util.formatProfile(doc.toJSON()));
    });
  }

  currentUser = (req, res) => {
    this.model.findOne({email: req.user.email}, (err, doc) => {
      if (err) { return  res.sendStatus(500); }
      if (!doc) { return res.status(401).send('Please log in again.'); }

      res.json(Util.formatProfile(doc.toJSON()));
    });
  }

}

export default UserCtrl;
