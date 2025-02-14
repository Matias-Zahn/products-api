import express from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`;
export const router = express.Router();

readdirSync(PATH_ROUTER).filter((fileName) => {
  const routeName = fileName.split(".").shift();

  if (routeName !== "index") {
    import(`./${routeName}`).then((route) => {
      router.use(`/${routeName}`, route.router);
    });
  }
});
