export default interface User {
  id: number;
  username: string;
  classe: string;
  level: number;
  password: string;
  orderId?: number;
  status?: boolean;
  message?: string;
}