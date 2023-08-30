import "reflect-metadata";
import express from "express";
import { router } from "./Main/insurance/autoInsurance.router";

const app = express();

app.use(express.json());
app.use(router)

export { app };
