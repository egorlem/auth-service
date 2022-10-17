import config from 'config'
import { v4 as uuidv4 } from 'uuid';
import jwt from 'jsonwebtoken';

export const generateTokensPair = () => {
  const jwtKey = config.get('jwt_private_key');
  const nextRefreshToken = uuidv4();
  const nextAccessToken = jwt.sign({ foo: 'bar' }, jwtKey);
  return { nextRefreshToken, nextAccessToken };
}

