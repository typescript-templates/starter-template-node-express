import { Router } from "express";
import { HomeController } from "../../controllers/HomeController";

const AppRoutes = Router();

// Home
AppRoutes.route("/").get(HomeController.index);

export default AppRoutes;