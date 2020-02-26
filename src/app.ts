import AppConfig from "./config/AppConfig";
import express, { Express } from "express";
import path from "path";
import AppRoutes from "./routes/1.0.0/index";

export class MyApp {

  async Initialize(app: Express): Promise<void> {
    // Create Express server

    // Express configuration
    app.set("port", AppConfig.PORT || 3000);

    // Static files
    app.use(
      express.static(path.join(__dirname, "public"), { maxAge: 31557600000 })
    );

    // app routes.
    app.use(AppRoutes);
  }

}
