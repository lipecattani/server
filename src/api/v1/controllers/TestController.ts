import { Request, Response } from 'express';

class TestController {
  constructor() {}

  public test = (req: Request, res: Response) => {
    return res.status(200).send({
      message: 'Ok',
    });
  };
}

export default TestController;
