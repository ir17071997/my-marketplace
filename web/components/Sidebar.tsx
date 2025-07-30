import { Box, Link, VStack } from '@chakra-ui/react';
import NextLink from 'next/link';

export default function Sidebar() {
  return (
    <Box w="200px" bg="gray.50" borderRight="1px solid" borderColor="gray.200" p="4">
      <VStack align="start" spacing="3">
        <NextLink href="/buyer" passHref>
          <Link>Buyer Dashboard</Link>
        </NextLink>
        <NextLink href="/seller" passHref>
          <Link>Seller Dashboard</Link>
        </NextLink>
        <NextLink href="/admin" passHref>
          <Link>Admin Dashboard</Link>
        </NextLink>
      </VStack>
    </Box>
  );
}