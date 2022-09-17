import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Script from "next/script";

export default function Home() {
  const ref = useRef();
  // visually display client-side hydration
  useEffect(() => {
    const divs = ref.current.querySelectorAll(".txt");
    for (const div of divs) {
      div.style.color = "purple";
    }
  }, []);

  const [val, setVal] = useState(0);
  const [active, setActive] = useState(true);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main ref={ref} className={styles.main}>
        <div style={{ fontSize: "32px" }} className="txt">
          Hello world
        </div>
        <br />
        <button onClick={() => setVal((x) => x + 1)}> {val}</button>
        <button onClick={() => setActive((act) => !act)}>Toggle Active. Current: {active.toString()}</button>
        <br />
        <div style={{ width: "700px" }}>
          <sl-tab-group>
            <sl-tab slot="nav" panel="general">
              General
            </sl-tab>
            <sl-tab slot="nav" panel="custom" active={active}>
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
        </div>
        <br />
        <br />
        <sl-progress-bar value="50" style={{ width: "200px" }} class="progress-bar-values">
          Halfway there!
        </sl-progress-bar>
        <br />
        <br />

        <sl-split-panel position="75" style={{ width: "400px" }}>
          <div
            slot="start"
            style={{ height: "200px", background: "var(--sl-color-neutral-50)", display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            Start
          </div>
          <div
            slot="end"
            style={{ height: "200px", background: "var(--sl-color-neutral-50)", display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            End
          </div>
        </sl-split-panel>
        <div style={{ fontSize: "32px" }} className="txt">
          Hello world
        </div>
      </main>
    </div>
  );
}
