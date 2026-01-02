import type { Customer } from "../Types/ClientTypes";

export const customers: Customer[] = [
  {
    id: "c1",
    name: "João Silva",
    phone: "11999999999",
    address: "Rua A, 123",
    lastOrders: [
      {
        id: "o1",
        clientId: "c1",
        items: [
          { productId: "p1", quantity: 2 },
          { productId: "p3", quantity: 1 },
        ],
        total: 89.9,
        status: {
          id: "delivered",
          name: "Entregue",
        },
        createdAt: "2025-12-20T19:30:00",
      },
      {
        id: "o2",
        clientId: "c1",
        items: [{ productId: "p2", quantity: 1 }],
        total: 42.5,
        status: {
          id: "preparing",
          name: "Em preparo",
        },
        createdAt: "2025-12-29T21:10:00",
      },
    ],
  },
  {
    id: "c2",
    name: "Maria Oliveira",
    lastOrders: [
      {
        id: "o3",
        clientId: "c2",
        items: [{ productId: "p1", quantity: 1 }],
        total: 39.9,
        status: {
          id: "canceled",
          name: "Cancelado",
        },
        createdAt: "2025-12-15T18:45:00",
      },
    ],
  },
  {
    id: "c3",
    name: "Carlos Souza",
    phone: "21988887777",
    lastOrders: [],
  },
];
