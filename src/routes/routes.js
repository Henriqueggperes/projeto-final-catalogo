import express from "express";
import {
  getIndex,
  getCreate,
  getDetails,
  getDelete,
  postCreate,
  getEdit,
  postEdit,
} from "../controller/MusicasController.js";
export const routes = express.Router();

routes.get("/", getIndex);

routes.get("/detalhes/:id", getDetails);

routes.get("/delete/:id", getDelete);

routes.post("/create", postCreate);
routes.get("/create", getCreate);

routes.get("/edit/:id", getEdit);
routes.post("/edit/:id", postEdit);
