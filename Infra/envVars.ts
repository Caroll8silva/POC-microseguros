import dotenv from "dotenv";
import { EnvVars } from "../Utils/interfaces/IEnvironment";

dotenv.config();

export const env: EnvVars = {
  PORT: process.env.PORT!,
  AWS_REGION: process.env.AWS_REGION!,
  AUTO_INSURANCE_TABLE: process.env.AUTO_INSURANCE_TABLE!,
  DYNAMODB_ENDPOINT: process.env.DYNAMODB_ENDPOINT!,
};
