import Timer from '@/src/components/timer/timer';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Timer />
      </main>
      {/* <footer className={styles.footer}></footer> */}
    </div>
  );
}
