import config from 'config';
import { 
  v4 as uuidv4, 
  // validate as uuidValidate,  
  // version as uuidVersion  
} from 'uuid';

import jwt from 'jsonwebtoken';

export const generateTokensPair = (jwtTokenData) => {
  const jwtKey = config.get('jwt_private_key');
  const nextRefreshToken = uuidv4();
  
  const nextAccessToken = jwt.sign(jwtTokenData, jwtKey);
  return { nextRefreshToken, nextAccessToken };
}

// TODO: Сделать базовую валилацию refresh токена
// console.log(uuidValidate("5c40afb5-331g-4705-8c83-1c845f279427"));
// console.log(uuidVersion();