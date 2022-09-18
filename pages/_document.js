import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

import { shoelacePath } from "../util/shoelace-bundle-info";

export default function Document() {
  return (
    <Html>
      <Head>
        <script src={shoelacePath}></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
