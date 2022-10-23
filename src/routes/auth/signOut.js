import { Router } from 'express';

const router = Router();

const signOutRoute = router.post('/signout', async (req, res) => {
  try {
    const { body: { login, password } } = req;
    // TODO: Тут мы удаляем сессию
    res.status(201).json({ message: 'Запрос: signout', login, password, });
  } catch (e) {
    res.status(500).json({ message: 'Цвета не загрузились' });
  }
});

export { signOutRoute };