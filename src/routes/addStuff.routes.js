import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { addCity, getCity } from "../controllers/addStuff.controllers.js";
import { citiesSchema } from "../schemas/addstuff.schemas.js";

const addStuffRouter = Router();

addStuffRouter.post("/add-city", validateSchema(citiesSchema), addCity);
addStuffRouter.get("/get-city", getCity);
addStuffRouter.post("/add-team", validateSchema(),);
addStuffRouter.get("/get-team",);

export default addStuffRouter;