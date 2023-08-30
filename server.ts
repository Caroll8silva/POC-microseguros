import "reflect-metadata";
import dotenv from "dotenv";
import { app } from "./app";
import { container } from "tsyringe";
import { AutoInsuranceController } from "./BS/Insurance/AutoInsurance.controller";
import { AutoInsuranceService } from "./Service/Insurance/AutoInsurance.service";

dotenv.config();

const port = process.env.PORT;

container.register("AutoInsuranceService", { useClass: AutoInsuranceService });
container.register("AutoInsuranceController", {
  useClass: AutoInsuranceController,
});

app.listen(port, () => {
  console.log(`Server running on port ${port} `);
});
