import dotenv from "dotenv";

import { dynamoDB } from "../config";
import { MessageError } from "../../../Utils/enums/errorMessages.enum";
import { env } from "../../envVars";


const params = {
  TableName: `${env.AUTO_INSURANCE_TABLE}`,
  AttributeDefinitions: [{ AttributeName: "id", AttributeType: "S" }],
  KeySchema: [{ AttributeName: "id", KeyType: "HASH" }],
  ProvisionedThroughput: {
    ReadCapacityUnits: 5,
    WriteCapacityUnits: 5,
  },
};

const createTable = async () => {
  try {
    await dynamoDB.createTable(params).promise();
  } catch (error) {
    console.error(MessageError.CREATE_TABLE_ERROR, error);
  }
};

const dropTable = async () => {
  try {
    await dynamoDB.deleteTable(params).promise();
  } catch (error) {
    console.error(MessageError.DROP_TABLE_ERROR, error);
  }
};

const handler = () => {
  const operation = process.argv[2];

  if (operation === "start") return createTable();
  if (operation === "drop") return dropTable();
};

handler();
