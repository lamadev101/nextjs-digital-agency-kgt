import styles from '../styles/Portfolio.module.css';
import Circle from './Circle';
import Image from 'next/image';
import { useState } from 'react';

const Portfolio = () => {
  const [index, setIndex] = useState(0);
  const handleArrow = (direction)=>{
    if(direction === 'l'){
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if(direction === 'r'){
      setIndex(index !== 2 ? index + 1 : 0);
    }
  }
  console.log(index);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Portfolio</h1>
      <Circle backgroundColor="white" left="50vh" right="0" top="-80vh" />
      <div className={styles.arrowContainer} style={{left: 0}} onClick={()=>handleArrow("l")}>
        <Image src="/img/arrowl.png" objectFit='cover' layout='fill' />
      </div>
      <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
        
        <div className={styles.card}>
          <div className={styles.imageCard}>
            <Image src="/img/pro1.jpg" width="100%" height="100%" objectFit='cover' layout='responsive'  alt='' />
          </div>
          <div>
            <h3 className={styles.title}>Project 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus corrupti beatae tenetur eveniet nisi tempora molestias. Dicta accusamus assumenda porro earum aut debitis ex voluptatibus, laboriosam reprehenderit cum ullam exercitationem ducimus voluptatem quia impedit architecto voluptate placeat aperiam aspernatur illum voluptates non inventore quam! Excepturi minus exercitationem id tempore fuga.</p>
          </div>
          <button className={styles.button}>More Info</button>
        </div>

        <div className={styles.card}>
          <div className={styles.imageCard}>
            <Image src="/img/pro2.jpg" width="100%" height="100%" objectFit='cover' layout='responsive'  alt='' />
          </div>
          <div>
            <h3 className={styles.title}>Project 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus corrupti beatae tenetur eveniet nisi tempora molestias. Dicta accusamus assumenda porro earum aut debitis ex voluptatibus, laboriosam reprehenderit cum ullam exercitationem ducimus voluptatem quia impedit architecto voluptate placeat aperiam aspernatur illum voluptates non inventore quam! Excepturi minus exercitationem id tempore fuga.</p>
          </div>
          <button className={styles.button}>More Info</button>
        </div>
        <div className={styles.card}>
          <div className={styles.imageCard}>
            <Image src="/img/pro3.jpg" width="100%" height="100%" objectFit='cover' layout='responsive'  alt='' />
          </div>
          <div>
            <h3 className={styles.title}>Project 3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus corrupti beatae tenetur eveniet nisi tempora molestias. Dicta accusamus assumenda porro earum aut debitis ex voluptatibus, laboriosam reprehenderit cum ullam exercitationem ducimus voluptatem quia impedit architecto voluptate placeat aperiam aspernatur illum voluptates non inventore quam! Excepturi minus exercitationem id tempore fuga.</p>
          </div>
          <button className={styles.button}>More Info</button>
        </div>
      </div>
      <div className={styles.arrowContainer} style={{right: 0}} onClick={()=>handleArrow("r")}>
        <Image src="/img/arrowr.png" layout='fill'  objectFit='cover' />
      </div>
    </div>
  );
}

export default Portfolio;
