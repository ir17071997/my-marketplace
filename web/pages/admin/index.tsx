import { useEffect, useState } from 'react';
import { Box, Heading, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import Layout from '../../components/Layout';

type Log = { id: string; action: string; payload: any };

export default function AdminDashboard() {
  const [logs, setLogs] = useState<Log[] | null>(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/logs`)
      .then((r) => r.json())
      .then(setLogs)
      .catch(() => setLogs([]));
  }, []);

  if (!logs) return <Spinner />;

  return (
    <Layout>
      <Heading mb="4">Admin Logs</Heading>
      <SimpleGrid columns={[1, 1, 2]} spacing="4">
        {logs.map((l) => (
          <Box key={l.id} p="4" borderWidth="1px" borderRadius="md">
            <Text>Action: {l.action}</Text>
            <Text>Data: {JSON.stringify(l.payload)}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookie = ctx.req.headers.cookie;
  const token = cookie
    ?.split(';')
    .map((c) => c.trim())
    .find((c) => c.startsWith('token='))
    ?.split('=')[1];
  try {
    const payload = token
      ? JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString())
      : null;
    if (!payload || payload.role !== 'admin') {
      throw new Error('unauthorized');
    }
    return { props: {} };
  } catch {
    return {
      redirect: { destination: '/admin/login', permanent: false },
    };
  }
};
