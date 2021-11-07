import CustomHead from '../components/CustomHead';
import NewsCard from '../components/NewsCard';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <CustomHead title='News App' />
      <div className={styles.news}>
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </>
  );
}
