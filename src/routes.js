import { Router } from 'express';
import SessionController from './controllers/SessionController';
import HouseController from './controllers/HouseController';
import multer from 'multer';
import uploudConfig from './config/uploud';

const routes = new Router();
const uploud = multer(uploudConfig);

routes.post('/sessions', SessionController.store);
routes.post('/houses', uploud.single('thumbnail'), HouseController.store);

export default routes;
