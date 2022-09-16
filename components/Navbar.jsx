import styles from '../styles/Navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src="/img/brand.png" width="160" height="80" object-fit="content" />
      </div>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href="/">home</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/work">work</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/blog">blog</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/about-us">about-us</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/contact">contact-us</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/help">help</Link>
        </li>
      </ul>
      <div className={styles.callNow}>
          Call Now: 016-345-2398
      </div>
    </div>
  )
}

export default Navbar