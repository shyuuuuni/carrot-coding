import "@/styles/globals.css";

import Layout from "@/components/templates/Layout";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  /* eslint-disable react/jsx-props-no-spreading */
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
