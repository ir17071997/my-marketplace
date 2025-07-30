import { useEffect, useState } from 'react';
import { Box, Heading, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import Layout from '../../components/Layout';

type Product = { id: string; title: string; price: number };

export default function SellerDashboard() {
  const [products, setProducts] = useState<Product[] | null>(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/seller/products?userId=seller1`)
      .then((r) => r.json())
      .then(setProducts)
      .catch(() => setProducts([]));
  }, []);

  if (!products) return <Spinner />;

  return (
    <Layout>
      <Heading mb="4">My Products</Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing="4">
        {products.map((p) => (
          <Box key={p.id} p="4" borderWidth="1px" borderRadius="md">
            <Text>{p.title}</Text>
            <Text>${p.price}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Layout>
  );
}