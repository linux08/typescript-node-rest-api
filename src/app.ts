import bodyParser from 'body-parser'; // used to parse the form data that you pass in the request
import express from 'express';
import morgan from 'morgan';
import { Logger } from './middleware/logger';

import { routes } from './routes';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void {
    // tslint:disable-next-line:no-unused-expression
    new Logger(this.app);
    this.app.use(bodyParser.json()); // support application/json type post data
    // support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({
      extended: false,
    }));

    // Routing
    this.app.use(routes);

  }

}

export default new App().app;
