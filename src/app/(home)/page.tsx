import Image from "next/image";
import styles from "./page.module.scss";

import profileImg from "./images/profile.webp";

import type { Metadata } from "next/types";
export const metadata: Metadata = { title: "Home" };

export default function Home() {
  return (
    <section className={styles.content}>
      <Image
        src={profileImg}
        className={styles.image}
        alt="MacOS Mouse"
        priority
      />
    </section>
  );
}
