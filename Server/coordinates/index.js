import { AsyncRouter } from 'express-async-router';
import * as controller from './coordinates.controller';

const router = new AsyncRouter();

router.get('/', controller.index);

export default router;