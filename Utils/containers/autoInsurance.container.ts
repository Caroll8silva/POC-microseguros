import { container } from "tsyringe";
import { AutoInsuranceService } from "../../Service/Insurance/AutoInsurance.service";
import { AutoInsuranceController } from "../../BS/Insurance/AutoInsurance.controller";

container.register("AutoInsuranceService", { useClass: AutoInsuranceService });
container.register("AutoInsuranceController", {
  useClass: AutoInsuranceController,
});
