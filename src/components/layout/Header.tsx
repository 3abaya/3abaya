import styles from './styles.module.scss';

import SearchAutocomplete from './SearchAutocomplete';
import appIcon from '../../assets/appIcon.webp';
import Image from 'next/image';
import { Button } from '@mui/material';
import { Login, Person } from '@mui/icons-material';

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <span className={styles.headerIcon}>
        <Image src={appIcon} width={50} height={50} alt='app Icon' />
        <span className={styles.headerLogo}>3abaya</span>
      </span>

      <span className={styles.headerSearchInput}>
        <SearchAutocomplete></SearchAutocomplete>
      </span>

      <span className={styles.login}>
        <Button endIcon={<Person/>} variant='contained' color='success'>
          LogIn
        </Button>
      </span>
    </header>
  );
};

export default Header;
