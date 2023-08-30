import { autoInjectable, container } from "tsyringe";
import { AutoInsuranceService } from "../../Service/Insurance/AutoInsurance.service";
import { Request, Response } from "express";

const service = container.resolve(AutoInsuranceService);

@autoInjectable()
class AutoInsuranceController {
  async create(req: Request, res: Response) {
    try {
      const data = req.body;
      const result = await service.create(data);
      return res.status(201).json(result);
    } catch (error) {
      res.status(400).json(error);
    }
  }
}
export { AutoInsuranceController };
