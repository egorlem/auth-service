import { Router } from 'express';
import { generateTokensPair } from '../../utils/tokens.utils.js';

const router = Router();

const signUpRoute = router.post('/signup', async (req, res) => {
  try {
    const { body: { login, password } } = req;
    
    // 1) Запись в базу регистрационных данных в базу
    // sql.set({ ...data })
    // 2) Создание новой сессии 
    // redis.set({})

    // Генерация пары токенов
    // TODO: Нужно засовывать в токен UUID
    const { nextRefreshToken, nextAccessToken } = generateTokensPair({ login });
    
    res
      .cookie('_suuid', nextRefreshToken, { maxAge: 900000, httpOnly: true })
      .status(201)
      .json({ accessToken: nextAccessToken, });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: e });
  }
});

export { signUpRoute };