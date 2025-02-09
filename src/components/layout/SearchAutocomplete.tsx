'use client'; // If using Next.js App Router

import React from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import styles from './styles.module.scss';
const SearchAutocomplete = () => {
  return (
    <TextField
    className={styles.autoCompleteText}
      
      
      slotProps={{
        input: {
          endAdornment: <SearchIcon />,
        },
      }}
    />
  );
};

export default SearchAutocomplete;
