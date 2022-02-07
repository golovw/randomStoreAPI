import { Router } from 'express';

import ProductsRoutes from './api/products.routes'

const router = Router();

router.use('/api', ProductsRoutes);

export default router;
