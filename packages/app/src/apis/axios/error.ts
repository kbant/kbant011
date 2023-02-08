import axios from 'axios';

export interface ClientError extends Error {
  status?: number;
  error?: Error;
}
export const errorCatch = (error: any) => {
  if (axios.isAxiosError(error)) {
    const newError: ClientError = {
      name: error.name,
      status: error.response?.status,
      message: `${error.code}, ${error.message}, ${error.config?.url}`,
      error: __DEV__ ? error : undefined,
    };
    return Promise.reject(newError);
  } else {
    const newError: ClientError = {
      name: error.name || 'UnexpectedError',
      status: error.status || -500,
      message: `Unexpected Error`,
      error: __DEV__ ? error : undefined,
    };
    return Promise.reject(newError);
  }
};

export default errorCatch;
