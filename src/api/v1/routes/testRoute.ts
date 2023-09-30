import express, { Request, Response } from 'express';
import TestController from '../controllers/TestController';
import TestMiddleware from '../middlewares/TestMiddleware';

const testController = new TestController();
const testMiddleware = new TestMiddleware();

const testRouter = express.Router();

testRouter.post('/example', (req: Request, res: Response) => {});

export default testRouter;
