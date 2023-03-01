import "../styles/globals.css";
import Head from "next/head";
import wrapper from "@/store/configureStore";

function App({ Component, pageProps }) {
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

export default wrapper.withRedux(App);

/* 
wrapper 로 App 컴포넌트를 감싸준다.
브라우저의 redux 상태 동기화는 물론, Provider store 까지 알아서 주입해준다.
*/
