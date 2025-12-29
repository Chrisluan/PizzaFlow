import { createContext, useState, type ReactNode } from "react";
import type { Order } from "../../Types/OrderTypes";




export type OrdersContextType = {
  orders: Array<Order>;
  addOrder: (order: Order) => void;
  updateOrder: (order: Order) => void;
  removeOrderById: (orderId: string) => void;
  clearOrders: () => void;
};

export const OrdersContext = createContext<OrdersContextType>(
  {} as OrdersContextType
);





type OrdersProviderProps = {
  children: ReactNode;
};

export function OrdersProvider({ children }: OrdersProviderProps) {
  const [orders, setOrders] = useState<Order[]>([]);

  function addOrder(order: Order) {

    setOrders((prev) => [...prev, order]);
    console.log(order)
  }

  function updateOrder(updatedOrder: Order) {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === updatedOrder.id ? updatedOrder : order
      )
    );
  }

  function removeOrderById(orderId: string) {
    setOrders((prev) => prev.filter((order) => order.id !== orderId));
  }

  function clearOrders() {
    setOrders([]);
  }

  return (
    <OrdersContext.Provider
      value={{
        orders,
        addOrder,
        updateOrder,
        removeOrderById,
        clearOrders,
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
}
