import { Router } from 'express';

import Products from '../../public/data/products.json';

const router = Router();

router.get('/products', (req, res) => {
    res.send({ id: 1, size: 'xl' });
});

export default router;
