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
    console.log('fkdjfjdjfjdj')
    try {
      const data = await this.connector.table('users')
        .select('*');
      res.send(data);
    }
    catch (err) {
      res.status(500).send({ error: err.message });
    }
  }

  async getUserById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.connector.table('users').whereIn('id', id);
      res.send(data);
    }
    catch (err) {
      res.status(500).send({ error: err.message });
    }
  }

  async updateUserInfo(req: Request, res: Response) {
    const { id } = req.params;
    console.log('fkdfd', req.body);
    try {
      const data = await this.connector.table('users').whereIn('id', id).update(req.body).returning('*')
      res.send(data)
    }
    catch (err) {

      res.status(500).send({ error: err.message });
    }
  }

}