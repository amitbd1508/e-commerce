import * as passport from 'passport';
import * as jwt from 'jsonwebtoken';
import * as Util from '../util/util';

export function isJWTValid(req: any, res: any, next: any): any {
  passport.authenticate('jwt', { session: false })(req, res, next);
}

export function register(req, res, next): any {
  passport.authenticate('local-signup', (err, doc, info) => {
    if (err || !doc) {
      console.log(info);
      const message = info ? info.message : 'Invalid arguments.';
      return res.status(400).json(message);
    }
    res.json(Util.formatProfile(doc.toJSON()));
  })(req, res, next);
}
