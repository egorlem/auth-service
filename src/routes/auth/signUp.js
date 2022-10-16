import { Router } from 'express';

const router = Router();

const signUpRoute = router.post('/signup', async (req, res) => {
  try {
    const { body: { login, password } } = req;
    res.status(201).json({ message: 'Запрос: signup', login, password, });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: e });
  }
});

export { signUpRoute };