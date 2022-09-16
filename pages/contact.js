import styles from '../styles/Contact.module.css';
import Circle from '../components/Circle';

const Contact = () => {
  return (
    <div className={styles.container}>
        <Circle backgroundColor="white" left="-50vh" top="-50vh" />
        <Circle backgroundColor="yellow" right="-20vh" bottom="-50vh" />
        <div className={styles.pageWrapper}>
            <h3 className={styles.pageTitle}>Get into Touch</h3>
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
  );
}

export default Contact;
