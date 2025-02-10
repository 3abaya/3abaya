import {
  
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import styles from './styles.module.scss';
import abayaImg from '../../assets/abaya.webp'
import hijabImg from '../../assets/hijab.webp'
import niqabImg from '../../assets/niqab.webp'
import Image from 'next/image';
const HomeHeaderComponent = () => {
  const navItems = [
    { label: 'Abaya', image: abayaImg },
    { label: 'Hijab', image: hijabImg },
    { label: 'Niqab', image: niqabImg },
  ];
  return (
    <List className={styles.homeHeaderList}>
      {navItems.map((item) => (
        <ListItem key={item.label} disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <ListItemIcon>
              <Image
                src={item.image}
                width={50}
                height={50}
                alt={item.label}
              ></Image>
            </ListItemIcon>
            <ListItemText className={styles.listItem} primary={item.label} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default HomeHeaderComponent;
