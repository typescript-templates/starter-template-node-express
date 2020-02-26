import express from "express";
import compression from "compression";  // compresses requests
import bodyParser from "body-parser";
import errorHandler from "errorhandler";
import lusca from "lusca";
import flash from "express-flash";

import AppConfig from "./config/AppConfig";
import { MyApp } from "./app";
import logger from "./util/logger";

/**
 * TODO:
 * -TypeORM: https://entwickler.de/online/javascript/typescript-server-579826585.html
 * -Swagger: https://medium.com/@sean_bradley/add-swagger-ui-to-existing-nodejs-typescript-api-882ca7aded90
 * -Restify: http://restify.com/docs/client-guide/
 */


// Create Express server

const app = express();

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));

const myApp = new MyApp();

myApp.Initialize(app);

/**
 * Error Handler. Provides full stack - remove for production
 */
app.use(errorHandler());

/**
 * Start Express server.
 */

const info = `App is running at http://localhost:${AppConfig.PORT} in ${app.get("env")} mode`;

logger.info(info);
const server = app.listen(AppConfig.PORT, () => {
  console.log(
  );
  console.log("  Press CTRL-C to stop\n");
});
export default server;
