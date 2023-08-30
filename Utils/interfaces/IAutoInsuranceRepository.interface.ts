import { AutoInsuranceModel } from "../../Models/Insurance.model";

export interface IAutoInsuranceRepository {
    create(data: AutoInsuranceModel): Promise<AutoInsuranceModel>
}