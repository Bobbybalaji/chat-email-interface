HEAD
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />

import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
57f509c92571330d0a9e47c2b2e61ab0ac8b517e
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
