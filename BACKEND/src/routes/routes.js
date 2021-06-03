import { Router } from 'express';
const router = Router();

import * as authControl from '../controllers/auth.controller'
import { authToken } from '../middlewares/authjwt'


router.post('/users', authControl.register);

router.post('/auth', authToken, authControl.login);

export default router;