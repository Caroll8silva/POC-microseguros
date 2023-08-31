import { AWSError } from "aws-sdk";
import { AutoInsuranceModel } from "../../Models/Insurance.model";
import { MessageError } from "../../Utils/errors/errorMessages.enum";
import { DynamoDocumentClient } from "../../Infra/dynamo/config";
import { IAutoInsuranceRepository } from "../../Utils/interfaces/IAutoInsuranceRepository.interface";

const TableName = `${process.env.AUTO_INSURANCE_TABLE}`;

export class AutoInsuranceRepository implements IAutoInsuranceRepository {
  async create(data: AutoInsuranceModel): Promise<AutoInsuranceModel> {
    try {
      const params = {
        TableName,
        Item: {
          id: data.id,
        },
      };

      await DynamoDocumentClient.put(params).promise();
      return data;
    } catch (error) {
      throw new Error(MessageError.CREATE_INSURANCE_ERROR);
    }
  }

  async findAll(): Promise<AutoInsuranceModel[]> {
    try {
      const params = {
        TableName,
      };

      const { Items: id } = await DynamoDocumentClient.scan(params).promise();
      return id as AutoInsuranceModel[];
    } catch (error) {
      throw new Error(MessageError.FIND_INSURANCE_ERROR);
    }
  }

  async update(id: string): Promise<void> {
    try {
      const params = {
        TableName,
        Key: {
          id: `${id}`,
        },
      };

      await DynamoDocumentClient.update(params).promise();
    } catch (error) {
      throw new Error(MessageError.UPDATE_INSURANCE_ERROR);

    }
  }
}
