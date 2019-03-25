import express from "express";
import userController from './controllers/user';

class Routes {
  public router: express.Router = express.Router();

  constructor() {
    this.config();
  }

  private config(): void {
    this.router.get("/user", (req: express.Request, res: express.Response) =>
      userController.getAll(req, res),
    );

    this.router.get(
      "/user/:id",
      (req: express.Request, res: express.Response) =>
        userController.getById(req, res),
    );

    this.router.post(
      "/user/",
      (req: express.Request, res: express.Response) =>
        userController.Add(req, res),
    );

    this.router.delete(
      "/user/:id",
      (req: express.Request, res: express.Response) =>
        userController.deleteById(req, res),
    );

    this.router.put(
      "/user/:id",
      (req: express.Request, res: express.Response) =>
        userController.updateById(req, res),
    );

  }
}

export const routes = new Routes().router;