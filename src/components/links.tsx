import styles from "./links.module.scss";
import Link from "next/link";

export default function Links() {
  return (
    <header className={styles.links}>
      <Link className={styles.link} href="/">
        Home
      </Link>
    </header>
  );
}
