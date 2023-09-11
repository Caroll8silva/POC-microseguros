export type DynamoProvisionedThroughput = {
  ReadCapacityUnits: number;
  WriteCapacityUnits: number;
};

export type DynamoKeySchema = {
  AttributeName: string;
  KeyType: string;
};

export type DynamoAttribute = {
  AttributeName: string;
  AttributeType: string;
};

export type DynamoParamsData = {
  TableName: string;
  AttributeDefinitions: Array<DynamoAttribute>;
  KeySchema: Array<DynamoKeySchema>;
  ProvisionedThroughput: DynamoProvisionedThroughput;
};
