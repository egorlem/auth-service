import { Router } from 'express';
import { generateTokensPair } from '../../utils/tokens.utils.js';


const router = Router();

const signUpRoute = router.post('/signup', async (req, res) => {
  try {
    const { body: { login, password } } = req;
    // Генерация пары токенов
    const { nextRefreshToken, nextAccessToken } = generateTokensPair();
    
    // 1) Запись в базу регистрационных данных в базу
    // sql.set({ ...data })
    // 2) Создание новой сессии 
    // redis.set({})
    
    res
      .cookie('initial_refresh_token', nextRefreshToken, { maxAge: 900000, httpOnly: true })
      .status(201)
      .json({ 
        accessToken: nextAccessToken,
        login, 
        password, 
      });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: e });
  }
});

export { signUpRoute };