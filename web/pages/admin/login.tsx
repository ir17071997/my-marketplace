import { useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Button, Heading, Input, VStack } from '@chakra-ui/react';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, role: 'admin' }),
    });
    if (res.ok) {
      const data = await res.json();
      document.cookie = `token=${data.access_token}; path=/`;
      router.push('/admin');
    }
  }

  return (
    <Box maxW="sm" mx="auto" mt="20" p="4" borderWidth="1px" borderRadius="md">
      <Heading mb="4">Admin Login</Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing="4">
          <Input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" colorScheme="blue" w="full">
            Login
          </Button>
        </VStack>
      </form>
    </Box>
  );
}
