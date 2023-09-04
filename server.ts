import "reflect-metadata";
import dotenv from "dotenv";
import { app } from "./app";
import "./Utils/containers/autoInsurance.container";

dotenv.config();

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server running on port ${port} `);
});
