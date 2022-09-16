import styles from '../styles/Contact.module.css';
import Image from 'next/image';
import Circle from './Circle';

const Contact = () => {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="black" left="-20vh" top="-20vh" />
      <Image className={styles.image} src="/img/banner.jpg" width="100%" height="100%" layout='fill' objectFit='cover' alt=''/>
      <div className={styles.contact}>
        <h1 className={styles.title}>Get into Touch</h1>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <span>Chuchepati, Chabahil Kathmandu</span>
            <span>Phone : 016 983 234</span>
            <span>Email: info.kgt@gmail.com</span>
          </div>
          <div className={styles.right}>
            <form action="" className={styles.form}>
              <input type="text" placeholder='Full Name' className={styles.input} />
              <input type="text" placeholder='Email Address' className={styles.input}/>
              <input type="number" placeholder="Phone Number" className={styles.input}/>
              <input type="text" placeholder='Company Name' className={styles.input}/>
              <textarea name="" id="" cols="30" className={styles.textArea}>Message</textarea>
              <button className={styles.button}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
