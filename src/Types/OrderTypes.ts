export type OrderStatus = {
  id: string;
  name: string;
};

export type Order = {
  id: string;
  clientId: string;
  items: Array<{
    productId: string;
    quantity: number;
  }>;
  total: number;
  status: OrderStatus;
  createdAt: string;
};
