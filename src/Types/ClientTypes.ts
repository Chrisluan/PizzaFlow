import type { Order } from "./OrderTypes";

export type Customer = {
  id: string;
  name: string;
  phone?: string;
  address?: string;
  lastOrders: Array<Order>;
};
