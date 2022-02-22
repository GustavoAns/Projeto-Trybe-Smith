export default interface User {
  username: string;
  classe: string;
  level: number;
  password: string;
  status?: boolean;
  message?: string;
}