import Image from "next/image";
import styles from "./page.module.scss";

import type { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Home",
  description: "An Personal Website",

  twitter: { title: "Home" },
  openGraph: { title: "Home" },
};

export default function Home() {
  return (
    <section className={styles.content}>
      <Image
        src="/img/profile.png"
        width="480"
        className={styles.image}
        alt="MacOS Mouse"
      />
    </section>
  );
}
