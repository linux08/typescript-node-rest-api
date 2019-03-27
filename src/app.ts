import bodyParser from 'body-parser'; // used to parse the form data that you pass in the request
import express from 'express';
import morgan from 'morgan';


import { routes } from './routes';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void {
    const controllers: any[] = [];
    const normalizedPath = require("path").join(__dirname, "controllers");

    require("fs").readdirSync(normalizedPath).forEach(function (file: string) {
      if (file.indexOf('base') === -1)
        controllers.push(require("./controllers/" + file).default);
    });



    // tslint:disable-next-line:no-unused-expression
    this.app.use(morgan('dev'));
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
