import Test from '@/src/hooks/test';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Test />
      </main>
      {/* <footer className={styles.footer}></footer> */}
    </div>
  );
}
