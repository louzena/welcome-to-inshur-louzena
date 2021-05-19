import { Router } from 'express';
import home from './home';
import user from './user';

const routes = Router();

routes.use('/', home);
routes.use('/', user);


export default routes;
