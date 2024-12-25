// pages/_app.js
import '../styles/globals.css';  // Ensure globals.css is imported
import Layout from '../components/Layout'; // Import Layout component
import { AppProps } from 'next/app'; // Import AppProps for TypeScript (optional)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
