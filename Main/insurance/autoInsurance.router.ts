import { Router } from "express";
import { container } from "tsyringe";
import { AutoInsuranceController } from "../../BS/Insurance/AutoInsurance.controller";
import "../../Utils/containers/autoInsurance.container";
import { createAutoInsuranceSchema } from "../../Utils/validators/schemas/createAutoInsurance.joi";

const router = Router();
const prefix = "/seguros";

const controller = container.resolve(AutoInsuranceController);

router.post(`${prefix}`, createAutoInsuranceSchema, controller.create);
router.get(`${prefix}`, controller.findAll);
router.put(`${prefix}/:id`, controller.update);
router.delete(`${prefix}/:id`, controller.delete);

export { router };
