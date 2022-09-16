import styles from '../styles/Footer.module.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.col1}>
          <Image src="/img/brand.png" width="300" height="150" alt="logo" />
          <span>The Agency That Combines Creative Solutions and Data Analytics to Boost Your Results: BigADCo. is an advertising, designing, and digital marketing agency that helps companies to achieve the best results through a combination of creative solutions and data analytics.</span>
        </div>
        <div className={styles.col}>
          <h4>Useful Links</h4>
          <ul className={styles.list}>
            <li>Home</li>
            <li>Works</li>
            <li>About Us</li>
            <li>Help</li>
          </ul>
        </div>
        <div className={styles.col}>
          <h4>Contact Us</h4>
          <ul className={styles.list}>
            <li>+977 9867542390</li>
            <li>kgt.info@gmail.com</li>
            <li>www.kgtcreativeagency.com</li>
          </ul>
        </div>
        <div className={styles.col}>
          <h4>Follow Us</h4>
          <ul className={styles.list}>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Linkedin</li>
            <li>Freepick</li>
          </ul>
        </div>
      </div>
      <div className={styles.footer}>
        Copyright &copy; 2022 KGT aka Knowledgable Group of Tech
      </div>
    </div>
  );
}

export default Footer;
