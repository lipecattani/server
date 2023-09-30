import { RequestHandler } from 'express';
import Auth from '../models/AuthModel';

const auth = new Auth();

class AuthController {
  constructor() {}

  public login: RequestHandler = async (req, res) => {
    console.log(req.body.username, req.body.password);
    const token = await auth.login(req.body.username, req.body.password);
    res.send({ res: token });
  };

  public register: RequestHandler = async (req, res) => {
    console.log(req.body.username, req.body.password);
    const token = await auth.register(req.body.username, req.body.password);
    res.send({ res: token });
  };
}

export default AuthController;
