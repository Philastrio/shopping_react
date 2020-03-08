export interface IAppNavbar {
  auth?: {
    isAuthenticated: boolean;
    user: IUser;
  };
}

export interface IUser {
  name?: string;
  email: string;
  password: string;
}
