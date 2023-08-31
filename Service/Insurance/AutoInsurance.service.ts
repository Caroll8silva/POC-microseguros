import { autoInjectable, container } from "tsyringe";
import { AutoInsuranceModel } from "../../Models/Insurance.model";
import { IAutoInsuranceService } from "../../Utils/interfaces/IAutoInsuranceService.interface";
import { AutoInsuranceRepository } from "../../DAO/auto/AutoInsurance.repository";

const repository = container.resolve(AutoInsuranceRepository);

@autoInjectable()
export class AutoInsuranceService implements IAutoInsuranceService {
  async create(data: AutoInsuranceModel): Promise<AutoInsuranceModel> {
    const result = await repository.create(data);
    return result;
  }

  async findAll(): Promise<AutoInsuranceModel[]> {
    const result = await repository.findAll();
    return result;
  }
}
