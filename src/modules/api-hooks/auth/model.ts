export type Authorization = {
  token: string;
  type: string;
};
export class Auth {
  authorization: Authorization;
  name: string;
  status: string;
}

export class RegisterInput {
  body: {
    email: string;
    password: string;
    phone_number: string;
  };
}
