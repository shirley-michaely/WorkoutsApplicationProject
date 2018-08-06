import { AsyncRouter } from 'express-async-router';
import * as controller from './workout.controller';
import objectId from 'express-param-objectid';
import paginate from 'express-paginate';

const router = new AsyncRouter();

router.param('id', objectId);

router.use(paginate.middleware(10, 50));

router.get('/', controller.index);
router.get('/:id', controller.get);

export default router;

