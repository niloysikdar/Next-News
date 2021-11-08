import CustomHead from '../components/CustomHead';
import NewsCard from '../components/NewsCard';
import styles from '../styles/Home.module.css';

export default function Home({ news }) {
  return (
    <>
      <CustomHead title='News App' />
      <div className={styles.news}>
        {news.map((item) => {
          return <NewsCard news={item} key={item.author} />;
        })}
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const API_KEY = process.env.API_KEY;
  const res = await fetch(`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${API_KEY}`);
  const data = await res.json();
  const news = data['articles'];

  return {
    props: {
      news: news,
    },
  };
};
