
import styles from './styles.module.scss';
import bannerImage from '../..//assets/banner.webp'
import Image from 'next/image';
const Banner=()=>{

    return (
      <div className={styles.bannerContainer}>
        <h1>Banner content here</h1>
        <Image src={bannerImage} alt='banner image' layout='fill' />
      </div>
    );
}

export default Banner;