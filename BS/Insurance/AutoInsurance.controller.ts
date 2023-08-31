import { autoInjectable, container } from "tsyringe";
import { AutoInsuranceService } from "../../Service/Insurance/AutoInsurance.service";
import { Request, Response } from "express";
import { IAutoInsuranceController } from "../../Utils/interfaces/IAutoInsuranceController.interface";

const service = container.resolve(AutoInsuranceService);

@autoInjectable()
class AutoInsuranceController implements IAutoInsuranceController {
  async create(req: Request, res: Response) {
    try {
      const data = req.body;

      const result = await service.create(data);
      return res.status(201).json(result);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const result = await service.findAll();
      return res.status(200).json(result);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;

      await service.update(id);
      return res.status(204);
    } catch (error) {
      res.status(400).json(error);
    }
  }
}
export { AutoInsuranceController };
