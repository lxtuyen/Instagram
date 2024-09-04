export interface IUser {
  id: number;
  username: string;
  email: string;
  role: {
    name: string;
  };
  created_at?: string;
  updated_at?: string;
}

interface DataType {
  id: number;
  username: string;
  email: string;
  role: {
    name: string;
  };
  created_at: string;
  updated_at: string;
}

export interface UsersResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: DataType[];
}
