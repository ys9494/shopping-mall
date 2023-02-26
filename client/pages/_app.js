import "../styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Stussy</title>
        <meta charSet="utf-8" name="description" content="stussy" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}
