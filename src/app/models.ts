export interface UserLogin {
  username: string;
  password: string;
}

export interface UserDetail {
  id?: number;
  username?: string;
  email?: string;
  roles?: []
}

export interface LoginResult {
  result?: boolean;
  error?: string;
}
