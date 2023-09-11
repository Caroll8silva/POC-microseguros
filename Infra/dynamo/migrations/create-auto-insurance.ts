import { env } from "../../envVars";
import { container } from "tsyringe";
import { DynamoTable } from ".";
import { DynamoParamsData } from "../../../Models/dynamo.model";

const params: DynamoParamsData = {
  TableName: `${env.AUTO_INSURANCE_TABLE}`,
  AttributeDefinitions: [
    { AttributeName: "id", AttributeType: "S" },
    { AttributeName: "user_id", AttributeType: "S" },
  ],
  KeySchema: [
    { AttributeName: "id", KeyType: "HASH" },
    { AttributeName: "user_id", KeyType: "RANGE" },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 5,
    WriteCapacityUnits: 5,
  },
};

const dynamoTable = container.resolve(DynamoTable);

dynamoTable.handler(params);
