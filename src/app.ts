
import { ServerLoader, ServerSettings } from "ts-express-decorators";
import express from 'express';
import bodyParser from 'body-parser'; // used to parse the form data that you pass in the request
import morgan from 'morgan';


@ServerSettings({
  acceptMimes: ["application/json"],
  rootDir: `${__dirname}`,
  port: process.env.PORT || 3000,
  mount: {
    "/": "${rootDir}/controllers/**\/*.ts"
  },
  componentsScan: [
    "${rootDir}/services/**/**.ts"
  ],
})

export class App extends ServerLoader {

  constructor() {
    super();
  }

  $onMountingMiddlewares(): void | Promise<any> {
    this.use(bodyParser.json())
      .use(bodyParser.urlencoded({
        extended: true
      }))
      .use(morgan('dev'));
  }

  public startApp() {
    this.start();
  }
  public $onReady() {
    console.log('Server started...');

  }

  public $onServerInitError(err: {} | string) {
    console.error(err);
  }

}

module.exports = new App().startApp();
// export default new App().app;
