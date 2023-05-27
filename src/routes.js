import { Router } from 'express';
import multer from 'multer';
import uploudConfig from './config/uploud';

import SessionController from './controllers/SessionController';
import HouseController from './controllers/HouseController';
import DashboardController from './controllers/DashboardController';
import ReserveController from './controllers/ReserveController';

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

routes.post('/houses/:house_id/reserve', ReserveController.store);
routes.get('/reserves', ReserveController.index);
routes.delete('/reserves/cancel', ReserveController.destroy);
export default routes;
