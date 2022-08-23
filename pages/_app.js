import "../styles/globals.css";
import "../shoelace.css";

if (typeof window === "object") {
  import("../shoelace-bundle.js");
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
