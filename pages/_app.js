import "../styles/globals.css";

if (typeof window === "object" && !/localhost/.test(location.href) && "serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then((registration) => {
      console.log("Service worker registered", registration);
    })
    .catch((err) => {
      console.log("Error registering service worker", err);
    });
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
