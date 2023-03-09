export interface ErrorObject extends Error {
  errors: {
    name: {
      name: string;
      message: string;
      properties: {
        message: string;
        type: string;
        path: string;
      };
      kind: string;
      path: string;
    };
  };
}
