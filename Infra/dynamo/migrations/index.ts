import { dynamoDB } from "../config";
import { MessageError } from "../../../Utils/enums/errorMessages.enum";
import { env } from "../../envVars";
import { DynamoParamsData } from "../../../Models/dynamo.model";
import { autoInjectable } from "tsyringe";

@autoInjectable()
export class DynamoTable {
  handler(params: DynamoParamsData) {
    const operation = process.argv[2];

    if (operation === "start") return this.createTable(params);
    if (operation === "drop") return this.dropTable(params);
  }

  private async createTable(params: DynamoParamsData) {
    try {
      await dynamoDB.createTable(params).promise();
    } catch (error) {
      console.error(MessageError.CREATE_TABLE_ERROR, error);
    }
  }

  private async dropTable(params: DynamoParamsData) {
    try {
      await dynamoDB.deleteTable(params).promise();
    } catch (error) {
      console.error(MessageError.DROP_TABLE_ERROR, error);
    }
  }
}
