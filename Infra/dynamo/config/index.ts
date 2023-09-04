import AWS from "aws-sdk";
import { DynamoDB } from "aws-sdk";
import { env } from "../../envVars";


const dynamoDB = new DynamoDB({
  endpoint: env.DYNAMODB_ENDPOINT,
  region: env.AWS_REGION,
});

const DynamoDocumentClient = new AWS.DynamoDB.DocumentClient({
  apiVersion: "2012-08-10",
  endpoint: env.DYNAMODB_ENDPOINT,
  region: env.AWS_REGION,
});


export { dynamoDB, DynamoDocumentClient };
