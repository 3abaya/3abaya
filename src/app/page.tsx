export const revalidate = 0;
import Banner from '@/components/Home/Banner';
import styles from './styles.module.scss';
import HomeHeaderComponent from '@/components/Home/HomeHeader';

export default async function Home() {
  return (
    <div className={styles.mainPage}>
      <HomeHeaderComponent></HomeHeaderComponent>
      <Banner></Banner>
    </div>
  );
}
