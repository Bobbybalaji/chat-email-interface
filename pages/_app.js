HEAD
import Layout from '../components/Layout';
import '../styles/globals.css';
import '../styles/globals.css';
import { AppProps } from 'next/app';
(commit hash)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
