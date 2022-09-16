import styles from '../styles/Services.module.css';
import Image from 'next/image';
import Circle from './Circle';

const Services = () => {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="#487692" top="-70vh" left="0" right="0" />
      <h1 className={styles.title}>Our Services</h1>
      <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.image}>
          <Image src="/img/wd.png" width="100%" height="100%" objectFit='cover' alt=''  />
        </div>
        <div className={styles.info}>
          <h3>web development</h3>
          <ul>
            <li>Web Hosting</li> 
            <li>Website Designing</li>
            <li>Domain Registration</li>
            <li>Custom Web Development</li>
          </ul>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.image}>
          <Image src="/img/gd.png" width="100" height="100" alt=''  />
        </div>
        <div className={styles.info}>
          <h3>graphic designing & brading</h3>
          <ul>
            <li>Logo Designing</li>
            <li>Brochure  Designing</li>
            <li>Package Designing</li>
            <li>Catelog Designing</li>
          </ul>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.image}>
          <Image src="/img/dm.png" width="100" height="100" alt=''  />
        </div>
        <div className={styles.info}>
          <h3>Digital Marketing</h3>
          <ul>
            <li>Content Planning & Execution </li>
            <li>Social Media Management (SMM)</li>
            <li>Paid Social Media and Google Ads (SEM, SMM)</li>
            <li>Search Engine Optimization (SEO)</li>
            <li>Influencer Marketing</li>
          </ul>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.image}>
          <Image src="/img/cw.png" width="100" height="100" alt=''  />
        </div>
        <div className={styles.info}>
          <h3>Content Writing</h3>
          <ul>
            <li>SEO Content Writing</li>
            <li>Website Content Writing</li>
            <li>Technical Content Writing</li>
            <li>Article and Blog Writing</li>
          </ul>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.image}>
          <Image src="/img/ad.png" width="100" height="100" alt=''  />
        </div>
        <div className={styles.info}>
          <h3>advertising</h3>
          <ul>
              <li>Media Planning & Execution</li>
              <li>MediaConceptualization of Ad Campaigns</li>
              <li>MediaVisually Engaging Ads</li>
              <li>MediaTelevision Commercials (TVC)</li>
          </ul>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.image}>
          <Image src="/img/pa.png" width="100" height="100" alt=''  />
        </div>
        <div className={styles.info}>
          <h3>printing assistence</h3>
          <ul>
            <li>Brochure/Catalogue</li>
            <li>Leaflet/Pamphlet</li>
            <li>Notepad</li>
            <li>Posters</li>
            <li>Flex Board</li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Services;
