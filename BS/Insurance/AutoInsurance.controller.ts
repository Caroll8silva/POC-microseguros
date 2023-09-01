import { autoInjectable, container } from "tsyringe";
import { AutoInsuranceService } from "../../Service/Insurance/AutoInsurance.service";
import { Request, Response } from "express";
import { IAutoInsuranceController } from "../../Utils/interfaces/IAutoInsuranceController.interface";
import { MessageError } from "../../Utils/errors/errorMessages.enum";

const service = container.resolve(AutoInsuranceService);

@autoInjectable()
export class AutoInsuranceController implements IAutoInsuranceController {
  async create(req: Request, res: Response) {
    try {
      const data = req.body;

      const result = await service.create(data);
      return res.status(201).json(result);
    } catch (error) {
      res.status(400).json(`${MessageError.CREATE_INSURANCE_ERROR, error}`);
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const result = await service.findAll();
      return res.status(200).json(result);
    } catch (error) {
      res.status(400).json(`${MessageError.FIND_INSURANCE_ERROR, error}`);
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;

      await service.update(id);
      return res.status(204);
    } catch (error) {
      res.status(400).json(`${MessageError.UPDATE_INSURANCE_ERROR, error}`);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;

      await service.delete(id);
      return res.status(204);
    } catch (error) {
      res.status(400).json(`${MessageError.DELETE_INSURANCE_ERROR, error}`);
    }
  }
}
