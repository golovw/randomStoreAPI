import { Router } from 'express';

import ProductsRoutes from './products.routes'

const router = Router();

router.use('/api', ProductsRoutes);

export default router;
