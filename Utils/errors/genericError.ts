import { genericErrorCode, genericErrorMessage } from "../enums/errorMessages.enum";

export const genericError = (error: any) => {
  const { code, message } = error;

  if (!message)
    return {
      code: genericErrorCode.SERVER_ERROR,
      message: genericErrorMessage.SERVER_ERROR,
    };

  return { code: genericErrorCode.BAD_REQUEST, message };
};
