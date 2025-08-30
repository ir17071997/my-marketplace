import { Box, Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

function parseToken(token: string | undefined) {
  try {
    if (!token) return null;
    const payload = token.split('.')[1];
    return JSON.parse(atob(payload));
  } catch {
    return null;
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  useEffect(() => {
    const cookie = document.cookie
      .split('; ')
      .find((row) => row.startsWith('token='));
    const token = cookie ? cookie.split('=')[1] : undefined;
    const payload = parseToken(token);
    if (!payload || payload.role !== 'admin') {
      router.replace('/admin/login');
    }
  }, [router]);

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
