import styles from '../styles/Testimonials.module.css';
import Image from 'next/image';
import Circle from './Circle';

const Testimonials = () => {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="white" bottom="-60vh" left="50vh" />
      <h1 className={styles.title}>Testimonials</h1>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <Image className={styles.image} src="/img/user1.jpeg" width="100" height="100" alt="" />
          <span>
            <span className={styles.name}>Jone Doe</span> <br />
            <span className={styles.jobTitle}>Project Manager</span>
          </span>
          <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit aliquid quod similique tenetur consequuntur sunt earum odit inventore.</span>
        </div>
        <div className={styles.card}>
          <Image className={styles.image} src="/img/user2.jpeg" width="100" height="100" alt="" />
          <span>
            <span className={styles.name}>Jenny Lincon</span> <br />
            <span className={styles.jobTitle}>HR</span>
          </span>
          <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit aliquid quod similique tenetur consequuntur sunt earum odit inventore.</span>
        </div>
        <div className={styles.card}>
          <Image className={styles.image} src="/img/user3.jpeg" width="100" height="100" alt="" />
          <span>
            <span className={styles.name}>Robin Smith</span> <br />
            <span className={styles.jobTitle}>Director</span>
          </span>
          <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit aliquid quod similique tenetur consequuntur sunt earum odit inventore.</span>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.head}>
          <h2 className={styles.headText}>How KGT does it</h2>
          <span>Trust and invest in the best advertising and digital marketing agency in Nepal.</span>
        </div>
        <div className={styles.options}>
          <div className={styles.option}>
            <Image src="/img/call.png" width="50" height="50" objectFit='contain' alt="" />
            <span>1. Call us to discuss your needs</span>
          </div>
          <div className={styles.option}>
            <Image src="/img/plan.png" width="50" height="50" objectFit='contain' alt="" />
            <span>2. Get a customised plan</span>
          </div>
          <div className={styles.option}>
            <Image src="/img/sales.png" width="50" height="50" objectFit='contain' alt="" />
            <span>3. Change your brand image</span>
          </div>
        </div>
        <div className={styles.callNow}>
          Call Now: 016-435-352
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
