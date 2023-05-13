import Image from "next/image";
import styles from "./page.module.scss";

import type { Metadata } from "next/types";

export const metadata: Metadata = { title: "Home" };

export default function Home() {
  return (
    <section className={styles.content}>
      <Image
        src="/images/profile.webp"
        width="480"
        height="480"
        className={styles.image}
        alt="MacOS Mouse"
      />
    </section>
  );
}
