import AWS from "aws-sdk";
import dotenv from "dotenv";
import { DynamoDB } from "aws-sdk";

dotenv.config();

const dynamoDB = new DynamoDB({
  endpoint: process.env.DYNAMODB_ENDPOINT,
  region: process.env.AWS_REGION,
});

const DynamoDocumentClient = new AWS.DynamoDB.DocumentClient({
  apiVersion: "2012-08-10",
  endpoint: process.env.DYNAMODB_ENDPOINT,
  region: process.env.AWS_REGION,
});


export { dynamoDB, DynamoDocumentClient };
