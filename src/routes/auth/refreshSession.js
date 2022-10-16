import { Router } from 'express';

const router = Router();

const refreshSessionRoute = router.post('/refresh', async (req, res) => {
  try {
    const { body: { token } } = req;
    const randomNumber = Math.random().toString();
    res.cookie('cookieName',randomNumber, { maxAge: 900000, httpOnly: true });
    res.status(201).json({ message: 'Запрос: refresh', token });
  } catch (e) {
    res.status(500).json({ message: 'Цвета не загрузились' });
  }
});

export { refreshSessionRoute };