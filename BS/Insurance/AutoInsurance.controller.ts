import { autoInjectable, container } from "tsyringe";
import { Request, Response } from "express";
import { AutoInsuranceService } from "../../Service/Insurance/AutoInsurance.service";
import { IAutoInsuranceController } from "../../Utils/interfaces/IAutoInsuranceController.interface";
import { genericError } from "../../Utils/errors/genericError";

const service = container.resolve(AutoInsuranceService);

@autoInjectable()
export class AutoInsuranceController implements IAutoInsuranceController {
  async create(req: Request, res: Response) {
    try {
      const data = req.body;

      const result = await service.create(data);
      return res.status(201).json(result);
    } catch (error) {
      const { code, message } = genericError(error);
      return res.status(code).json({ message });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const result = await service.findAll();
      return res.status(200).json(result);
    } catch (error) {
      const { code, message } = genericError(error);
      return res.status(code).json({ message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;

      await service.update(id);
      return res.status(204);
    } catch (error) {
      const { code, message } = genericError(error);
      return res.status(code).json({ message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;

      await service.delete(id);
      return res.status(204);
    } catch (error) {
      const { code, message } = genericError(error);
      return res.status(code).json({ message });
    }
  }
}
