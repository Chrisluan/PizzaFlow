import { useContext } from "react";
import { OrdersContext } from "./OrdersProvider";
export function useOrders() {
    return useContext(OrdersContext);
}