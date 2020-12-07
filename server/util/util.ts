import * as jwt from 'jsonwebtoken';

export function generateAccessToken(user): any {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
    },
    process.env.SECRET_TOKEN,
    {
      expiresIn: '7d',
      issuer: user._id.toString(),
    }
  );
}

export function formatProfile(user): any {
  return {
    id: user._id,
    name: user.name,
    email: user.email,
    token: this.generateAccessToken(user)
  };
}
