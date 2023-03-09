export interface UserModel {
  name: {
    type: string;
    required: [boolean, string];
    minlength: number;
    maxlength: number;
    trim: boolean;
  };
  email: {
    type: string;
    required: [boolean, string];
    validator: {
      validator: (v: string) => boolean;
      message: string;
    };
    unique: boolean;
  };
  password: {
    type: string;
    required: [boolean, string];
    minLength: number;
    select: boolean;
  };
  lastName?: {
    type: string;
    trim: boolean;
    maxlength: number;
    default: string;
  };
  location?: {
    type: string;
    trim: boolean;
    maxlength: number;
    default: string;
  };
}
