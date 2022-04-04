import express from "express";
import path from "path";
import { routes } from "./src/routes/routes.js";

const __dirname = path.resolve(path.dirname(""));
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.listen(port, () => console.log(`O servidor está rodando na porta ${port}`));
