import { Request, Response } from "express";

export interface IAutoInsuranceController {
  create(req: Request, res: Response): Promise<any>;
  findAll(req: Request, res: Response): Promise<any>;
  update(req: Request, res: Response): Promise<any>;
  delete(req: Request, res: Response): Promise<any>;


}
