import Navbar from './Navbar';
import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
