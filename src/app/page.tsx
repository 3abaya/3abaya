export const revalidate=0;
import Banner from '@/components/Home/Banner';
import styles from './styles.module.scss'

export default async function Home() {
  return (
    <div className={styles.mainPage}>
      <Banner></Banner>
    </div>
  );
}
