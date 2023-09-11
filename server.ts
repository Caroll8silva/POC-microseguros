import "reflect-metadata";
import { app } from "./app";
import "./Utils/containers/autoInsurance.container";
import { env } from "./Infra/envVars";

const port = env.PORT;

app.listen(port, () => {
  console.log(`Server running on port ${port} `);
});
