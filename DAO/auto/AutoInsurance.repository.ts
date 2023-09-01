import { FormattedAutoInsuranceModel } from "../../Models/Insurance.model";
import { MessageError } from "../../Utils/errors/errorMessages.enum";
import { DynamoDocumentClient } from "../../Infra/dynamo/config";
import { IAutoInsuranceRepository } from "../../Utils/interfaces/IAutoInsuranceRepository.interface";

const TableName = `${process.env.AUTO_INSURANCE_TABLE}`;

export class AutoInsuranceRepository implements IAutoInsuranceRepository {
  async create(
    data: FormattedAutoInsuranceModel
  ): Promise<FormattedAutoInsuranceModel> {
    const params = {
      TableName,
      Item: {
        id: data.id,
        title: data.title,
        use_terms: data.use_terms,
        description: data.description,
        value: data.value,
        company: data.company,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
        product_id: data.product_id,
      },
    };

    await DynamoDocumentClient.put(params).promise();
    return data;
  }

  async findAll(): Promise<FormattedAutoInsuranceModel[]> {
    const params = {
      TableName,
    };

    const { Items: id } = await DynamoDocumentClient.scan(params).promise();
    return id as FormattedAutoInsuranceModel[];
  }

  async update(id: string): Promise<void> {
    const params = {
      TableName,
      Key: {
        id: `${id}`,
      },
    };

    await DynamoDocumentClient.update(params).promise();
  }
  async delete(id: string): Promise<void> {
    const params = {
      TableName,
      Key: {
        id: `${id}`,
      },
    };

    await DynamoDocumentClient.delete(params).promise();
  }
}
