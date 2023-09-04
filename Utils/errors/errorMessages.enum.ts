export enum MessageError {
  CREATE_TABLE_ERROR = "An error occurred while trying to create the table",
  DROP_TABLE_ERROR = "An error occurred while trying to delete the table",
  CREATE_INSURANCE_ERROR = "An error occurred while creating",
  FIND_INSURANCE_ERROR = "An error occurred while searching insurance",
  UPDATE_INSURANCE_ERROR = "An error occurred while updating data",
  DELETE_INSURANCE_ERROR = "An error ocurred while deleting insurance",
}

export enum genericErrorCode {
  SERVER_ERROR = 500,
  BAD_REQUEST = 400
}

export enum genericErrorMessage {
  SERVER_ERROR = "Internal Server Error",
}
