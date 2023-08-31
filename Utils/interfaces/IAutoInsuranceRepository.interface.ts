import { AutoInsuranceModel } from "../../Models/Insurance.model";

export interface IAutoInsuranceRepository {
  create(data: AutoInsuranceModel): Promise<AutoInsuranceModel>;
  findAll(): Promise<AutoInsuranceModel[]>;
  update(id: string): Promise<void>;
  delete(id: string): Promise<void>;
}
