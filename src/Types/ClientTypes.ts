import type { Order } from "./OrderTypes";

export type Client = {
  id: string;
  name: string;
  phone?: string;
  address?: string;
  lastOrders: Array<Order>;
};
