import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/NewsCard.module.css';

const url = `https://static.reuters.com/resources/r/?m=02&d=20211106&t=2&i=1580467133&r=LYNXMPEHA504K&w=500`;

const NewsCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.image_wrapper}>
        <Image className={styles.image} src={url} layout='fill' priority />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>
          Buffett's Berkshire Hathaway boosts operating profit, lower stock gains hurt net results - Reuters
        </h3>
        <p className={styles.description}>
          Warren Buffett's Berkshire Hathaway Inc said on Saturday it has extended its rebound from the early stages of
          the pandemic, with improved results in many businesses offsetting a greater loss from insurance underwriting.
        </p>
        <p className={styles.author}>Author: Reuters Staff</p>
        <p className={styles.date}>Date: 2021-11-06</p>
        <Link href='/'>
          <a className={styles.readmore}>Read More</a>
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
