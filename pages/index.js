import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Script from "next/script";

function tabChanged(e) {
  console.log("Tab changed", e);
}

export default function Home() {
  const ref = useRef();
  const tabsRef = useRef();
  const modalRef = useRef();
  const [val, setVal] = useState(0);
  const [active, setActive] = useState(true);
  const [open, setOpen] = useState(false);

  const onModalHide = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    const divs = ref.current.querySelectorAll(".txt");
    for (const div of divs) {
      // visually display client-side hydration
      div.textContent = "HYDRATED";
      div.style.color = "green";
    }

    tabsRef.current.addEventListener("sl-tab-show", tabChanged);
    modalRef.current.addEventListener("sl-hide", onModalHide);

    return () => {
      tabsRef.current.removeEventListener("sl-tab-show", tabChanged);
      modalRef.current.addEventListener("sl-hide", onModalHide);
    };
  }, []);

  useLayoutEffect(() => {
    modalRef.current.open = open;
  }, [open]);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main ref={ref} className={styles.main}>
        <div style={{ fontSize: "32px", color: "red" }} className="txt">
          SSR Content
        </div>

        <div style={{ width: "700px" }}>
          <button onClick={() => tabsRef.current.show("custom")}>Show custom</button>

          <sl-tab-group ref={tabsRef}>
            <sl-tab slot="nav" panel="general">
              General
            </sl-tab>
            <sl-tab slot="nav" panel="custom">
              Custom
            </sl-tab>
            <sl-tab slot="nav" panel="advanced">
              Advanced
            </sl-tab>
            <sl-tab slot="nav" panel="disabled" disabled>
              Disabled
            </sl-tab>

            <sl-tab-panel name="general">This is the general tab panel.</sl-tab-panel>
            <sl-tab-panel name="custom">This is the custom tab panel.</sl-tab-panel>
            <sl-tab-panel name="advanced">This is the advanced tab panel.</sl-tab-panel>
            <sl-tab-panel name="disabled">This is a disabled tab panel.</sl-tab-panel>
          </sl-tab-group>

          <br />
          <button onClick={() => setOpen(true)}>Open Modal</button>

          <sl-dialog no-header ref={modalRef} label="Dialog">
            Hello World!
            <button slot="footer" variant="primary" onClick={() => setOpen(false)}>
              Close
            </button>
          </sl-dialog>
        </div>
      </main>
    </div>
  );
}
