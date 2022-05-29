export interface UserLogin {
  username: string;
  password: string;
}

export interface UserDetail {
  id?: number;
  username: string;
  password: string;
  email?: string;
  roles?: string
}

export interface LoginResult {
  result?: boolean;
  error?: string;
}
