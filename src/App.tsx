import { Button, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useOrders } from "./Contexts/Orders/UseOrdersHook";
import type { Order } from "./Types/OrderTypes";
function App() {
  const { orders, addOrder } = useOrders();
  const [newOrder, setNewOrder] = useState<Order>({
    id: crypto.randomUUID(),
    clientId: "",
    items: [],
    total: 0,
    status: { id: "1", name: "Pendente" },
    createdAt: new Date().toISOString(),
  });

  return (
    <Flex>
      <Button colorScheme="teal">{orders.length}</Button>

      <Text>Add Order</Text>
      <Button onClick={() => addOrder(newOrder)}>Add</Button>
    </Flex>
  )
}

export default App
