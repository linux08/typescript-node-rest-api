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

  }
}

export const routes = new Routes().router;