import { Router } from 'express';

const router = Router();

const signInRoute = router.post('/signin', async (req, res) => {
  try {
    const { body: { login, password } } = req;
    res.status(201).json({ message: 'Запрос: signin', login, password, });
  } catch (e) {
    res.status(500).json({ message: 'Цвета не загрузились' });
  }
});

export { signInRoute };