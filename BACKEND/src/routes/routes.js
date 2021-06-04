import { Router } from 'express';
const router = Router();

import * as authControl from '../controllers/auth.controller'

router.post('/users', authControl.register);

router.post('/auth', authControl.login);

export default router;