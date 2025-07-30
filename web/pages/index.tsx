import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>MyMarketplace</title>
        <meta name="description" content="Etsy-like multi-vendor marketplace" />
      </Head>
      <main>
        <h1>Добро пожаловать в MyMarketplace</h1>
        <p>Marketplace frontend на Next.js</p>
      </main>
    </>
  );
}