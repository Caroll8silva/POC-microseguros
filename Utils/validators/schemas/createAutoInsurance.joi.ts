import Joi from "joi";
import { UseTermsEnum } from "../../enums/autoInsurance.enum";
import { NextFunction, Request, Response } from "express";

export const createAutoInsuranceSchema = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const schema = Joi.object({
      title: Joi.string().trim().required(),
      use_terms: Joi.string().trim().valid(UseTermsEnum).required(),
      description: Joi.string().trim().required(),
      value: Joi.number().required(),
      company: Joi.string().trim().required(),
      product_id: Joi.string().trim().required(),
    });

    const options = {
        abortEarly: false, 
        allowUnknown: true, 
        stripUnknown: true
    };

    const { error } = schema.validate(req.body, options);

    if (error) throw error;

    return next();
  } catch (error) {
    return res.status(400).json(error);
  }
};
