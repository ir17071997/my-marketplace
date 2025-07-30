import { useEffect, useState } from 'react';
import { Box, Heading, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import Layout from '../../components/Layout';

type Order = { id: string; total: number; status: string };

export default function BuyerDashboard() {
  const [orders, setOrders] = useState<Order[] | null>(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders`)
      .then((r) => r.json())
      .then(setOrders)
      .catch(() => setOrders([]));
  }, []);

  if (!orders) return <Spinner />;

  return (
    <Layout>
      <Heading mb="4">Buyer Orders</Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing="4">
        {orders.map((o) => (
          <Box key={o.id} p="4" borderWidth="1px" borderRadius="md">
            <Text>ID: {o.id}</Text>
            <Text>Total: {o.total}</Text>
            <Text>Status: {o.status}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Layout>
  );
}