import { Request, Response } from "express";

export interface IAutoInsuranceController {
    create(req: Request, res: Response): Promise<void> 
}