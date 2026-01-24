import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./router-admin";
import morgan from "morgan";
import { MORGAN_FORMAT } from "./libs/config";

/** 1-ENTRANCE **/
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// request kirganini log qilayabdi
app.use(morgan(MORGAN_FORMAT));

// yasamasi:
// app.use((req, res, next) => {
//   console.log("➡️ Incoming request:", req.method, req.originalUrl);
//   next();
// });

/** 2-SESSIONS **/

/** 3-VIEWS **/
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

/** 4-ROUTERS **/
app.use("/admin", routerAdmin); // EJS
app.use("/", router); // REACT, Middleware Design Pattern

export default app;
