import { RequestHandler } from 'express';

export class TestMiddleware {
  public constructor() {}

  public test: RequestHandler = (req, res, next) => {
    next();
  };
}

export default TestMiddleware;
