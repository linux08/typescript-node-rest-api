import * as knex from 'knex';
import { Request, Response } from 'express';
import KnexConnection from '../knex';
export class UserController {

  private connector: knex;
  constructor() {
    this.connector = new KnexConnection()//.knex();
  }

  public test(req: Request, res: Response) {
    res.send('test')
  }


  async getUser(req: Request, res: Response) {
    try {
      const data = await this.connector.table('users')
        .select('*');
      console.log('d -data');
      res.send(data);
    }
    catch (err) {
      res.status(500).send({ error: err.message });
    }
  }


}