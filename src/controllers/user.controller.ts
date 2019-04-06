import { Controller, Get, Req, Put, Res } from "ts-express-decorators";
import * as knex from 'knex';
import { Request, Response } from 'express';
import KnexConnection from '../knex';
import API from './API';
@Controller("/")
export class UserController extends API {

  private connector: knex;
  constructor() {
    super();
    this.connector = new KnexConnection()//.knex();
  }
  @Get("/test")
  public test(req: Request, res: Response) {
    res.send('test')
  }

  @Get("/users")
  async getUser(req: Request, res: Response) {
    try {
      const data = await this.connector.table('users')
        .select('*');
      res.send(data);
    }
    catch (err) {
      res.status(500).send({ error: err.message });
    }
  }
  @Get("/users/:id")
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
  @Put("/users/:id")
  async updateUserInfo(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.connector.table('users').whereIn('id', id).update(req.body).returning('*')
      res.send(data)
    }
    catch (err) {

      res.status(500).send({ error: err.message });
    }
  }

}