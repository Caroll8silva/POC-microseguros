import { AutoInsuranceModel } from "../../Models/Insurance.model";

export interface IAutoInsuranceService { 
    create(data: AutoInsuranceModel): Promise<AutoInsuranceModel> 
}