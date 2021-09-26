import "../styles/globals.scss";
import type { AppProps } from "next/app";
import NEXTHEAD from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NEXTHEAD>
        <title>POST</title>
      </NEXTHEAD>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
