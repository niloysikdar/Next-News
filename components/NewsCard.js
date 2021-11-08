import Image from 'next/image';
import dayjs from 'dayjs';
import styles from '../styles/NewsCard.module.css';

const NewsCard = ({ news }) => {
  const date = new Date(news.publishedAt).toDateString();
  // console.log(date);

  // let date = dayjs().format(news.publishedAt);

  return (
    <div className={styles.card}>
      <div className={styles.image_wrapper}>
        <Image className={styles.image} src={news.urlToImage} alt='News' layout='fill' priority />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{news.title}</h3>
        <p className={styles.description}>{news.description}</p>
        <p className={styles.author}>Author: {news.author}</p>
        <p className={styles.date}>Date: {date}</p>

        <a href={news.url} target='_blank' rel='noreferrer' className={styles.readmore}>
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
