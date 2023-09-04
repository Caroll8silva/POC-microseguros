import { autoInjectable, container } from "tsyringe";
import { v4 as uuid } from "uuid";
import { AutoInsuranceModel } from "../../Models/Insurance.model";
import { IAutoInsuranceService } from "../../Utils/interfaces/IAutoInsuranceService.interface";
import { AutoInsuranceRepository } from "../../DAO/auto/AutoInsurance.repository";
import { formateDateToISO } from "../../Utils/helpers/dateFormatter";

const repository = container.resolve(AutoInsuranceRepository);

@autoInjectable()
export class AutoInsuranceService implements IAutoInsuranceService {
  async create(data: AutoInsuranceModel): Promise<AutoInsuranceModel> {
    const insuranceData = this.buildAutoInsuranceData(data);

    const result = await repository.create(insuranceData);
    return result;
  }

  async findAll(): Promise<AutoInsuranceModel[]> {
    const result = await repository.findAll();
    return result;
  }

  async update(id: string): Promise<void> {
    await repository.update(id);
  }

  async delete(id: string): Promise<void> {
    await repository.delete(id);
  }

  private buildAutoInsuranceData(data: AutoInsuranceModel) {
    const currentDate = formateDateToISO(new Date());

    return {
      id: uuid(),
      title: data.title,
      use_terms: data.use_terms,
      description: data.description,
      value: data.value,
      company: data.company,
      createdAt: currentDate,
      updatedAt: currentDate,
      product_id: "test",
    };
  }
}
