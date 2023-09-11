import { env } from "../../envVars";
import { DynamoTable } from ".";
import { container } from "tsyringe";
import { DynamoParamsData } from "../../../Models/dynamo.model";

const params: DynamoParamsData = {
  TableName: `${env.USER_TABLE}`,
  AttributeDefinitions: [{ AttributeName: "id", AttributeType: "S" }],
  KeySchema: [{ AttributeName: "id", KeyType: "HASH" }],
  ProvisionedThroughput: {
    ReadCapacityUnits: 5,
    WriteCapacityUnits: 5,
  },
};

const dynamoTable = container.resolve(DynamoTable);

dynamoTable.handler(params);
