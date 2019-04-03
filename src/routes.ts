import express from "express";
import { UserController } from './controllers/user';

class Routes {
  public router: express.Router = express.Router();

  public userController: UserController = new UserController()
  constructor() {
    this.config();
  }

  private config(): void {
    this.router.get('/test', (req: express.Request, res: express.Response) =>
      this.userController.test(req, res),
    );

    this.router.get('/user', (req: express.Request, res: express.Response) =>
      this.userController.getUser(req, res),
    );

    this.router.get(`/user/:id`, (req: express.Request, res: express.Response) =>
      this.userController.getUserById(req, res),
    );


    this.router.post(`/user/:id`, (req: express.Request, res: express.Response) =>
      this.userController.updateUserInfo(req, res),
    );
  }
}

export const routes = new Routes().router;