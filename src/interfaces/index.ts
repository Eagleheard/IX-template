export interface RickAndMortyTypes {
  id: number;
  name: string;
  image: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUser {
  userReducer: {
    user: {
      firstName: string;
      lastName: string;
    };
    isLoading?: boolean;
  };
}

export interface ISign {
  handleSwitch: () => void;
  style?: string;
}
