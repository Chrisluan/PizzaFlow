import { ChakraProvider } from '@chakra-ui/react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { OrdersProvider } from './Contexts/Orders/OrdersProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider>
      <OrdersProvider>
        <App />
      </OrdersProvider>
    </ChakraProvider>
  </StrictMode>,
)
