import { Request, Response } from 'express';

export class UserController {

  public test(req: Request, res: Response) {
    res.send('test')
  }

}