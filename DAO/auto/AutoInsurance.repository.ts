import { AWSError } from "aws-sdk";
import { AutoInsuranceModel } from "../../Models/Insurance.model";
import { MessageError } from "../../Utils/errors/errorMessages.enum";
import { DynamoDocumentClient } from "../../Infra/dynamo/config";

const TableName = `${process.env.AUTO_INSURANCE_TABLE}`;

export class AutoInsuranceRepository {
  async create(data: AutoInsuranceModel): Promise<AutoInsuranceModel> {
    try {
      const params = {
        TableName,
        Item: {
          id: data.teste,
        },
      };

      await DynamoDocumentClient.put(params).promise();
      return data;
      
    } catch (error) {
      throw new Error(MessageError.CREATE_INSURANCE_ERROR);
    }
  }
}

