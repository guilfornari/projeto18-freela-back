import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { addCity, addTeam, getCities, getTeams } from "../controllers/addStuff.controllers.js";
import { citiesSchema, teamsSchema } from "../schemas/addStuff.schemas.js";

const addStuffRouter = Router();

addStuffRouter.post("/add-city", validateSchema(citiesSchema), addCity);
addStuffRouter.get("/get-city", getCities);
addStuffRouter.post("/add-team", validateSchema(teamsSchema), addTeam);
addStuffRouter.get("/get-team", getTeams);

export default addStuffRouter;