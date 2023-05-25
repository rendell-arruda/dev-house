import { Router } from 'express';
import multer from 'multer';
import uploudConfig from './config/uploud';

import SessionController from './controllers/SessionController';
import HouseController from './controllers/HouseController';
import DashboardController from './controllers/DashboardController';

const routes = new Router();
const uploud = multer(uploudConfig);

routes.post('/sessions', SessionController.store);
routes.post('/houses', uploud.single('thumbnail'), HouseController.store);
routes.get('/houses', HouseController.index);
routes.put(
  '/houses/:house_id',
  uploud.single('thumbnail'),
  HouseController.update
);

routes.delete('/houses', HouseController.destroy);

routes.get('/dashboard', DashboardController.show);

export default routes;
