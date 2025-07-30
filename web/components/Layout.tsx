import { Box, Flex } from '@chakra-ui/react';
import Header from './Header';
import Sidebar from './Sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Flex height="100vh">
      <Sidebar />
      <Box flex="1" overflowY="auto">
        <Header />
        <Box p="4">{children}</Box>
      </Box>
    </Flex>
  );
}