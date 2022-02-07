import { Router } from 'express';

const router = Router();

router.get('/products', (req, res) => {
    res.send({ id: 1, size: 'xl' });
});

export default router;
