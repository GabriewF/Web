import Link from "next/link";
import styles from "./links.module.scss";

export default function Links() {
  return (
    <header className={styles.links}>
      <Link className={styles.link} href="/">Home</Link>
    </header>
  );
}
