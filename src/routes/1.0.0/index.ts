import { Router } from "express";
import * as homeController from "../../controllers/home";

const AppRoutes = Router();

// Home
AppRoutes.route("/").get(homeController.index);

export default AppRoutes;