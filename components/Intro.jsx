import styles from '../styles/Intro.module.css';
import Circle from './Circle';

const Intro = () => {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="white" top="-50vh" left="-50vh" />
      <Circle backgroundColor="white"  right="-40vh" bottom="-40vh" />
      <div className={styles.wrapper}>
        <div className={styles.first}>
          <h1 className={styles.title}>How to attract your potential customers?</h1>
          <p>KGT is a leading advertising and digital marketing agency in Nepal. With more than ten years of experience in advertising and digital marketing in Nepal, we can help you transform your brand image both online and offline. <br /> Our team will take you through our advertising and digital marketing solutions- Creating and Designing Websites, Digital Marketing, SEO, Graphic Designing, and more, and partner with you to take you closer to your customers..</p>
        </div>
        <div className={styles.second}>
          <h1 className={styles.brandName}>The Knowledgable Group of Tech.</h1>
          <h4 className={styles.subHead}>Digital Marketing Agency</h4>
        </div>
      </div>
      <div className={styles.tagLine}>
        <span>Increase Brand Awerness</span>
        <span>Stand out against competition</span>
        <span>Increase Customer</span>
      </div>
    </div>
  )
}

export default Intro