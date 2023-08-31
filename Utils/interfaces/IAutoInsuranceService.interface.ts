import { AutoInsuranceModel } from "../../Models/Insurance.model";

export interface IAutoInsuranceService {
  create(data: AutoInsuranceModel): Promise<AutoInsuranceModel>;
  findAll(): Promise<AutoInsuranceModel[]>;
  update(id: string): Promise<void>;
}
