import { Router } from "express";
import { container } from "tsyringe";
import { AutoInsuranceController } from "../../BS/Insurance/AutoInsurance.controller";
import { AutoInsuranceService } from "../../Service/Insurance/AutoInsurance.service";
import "../../Utils/containers/autoInsurance.container";

const router = Router();
const prefix = "/seguros";

const controller = container.resolve(AutoInsuranceController);

router.post(`${prefix}`, controller.create);
router.get(`${prefix}`, controller.findAll);

export { router };
