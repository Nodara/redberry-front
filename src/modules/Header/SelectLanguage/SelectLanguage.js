import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import i18n from '../../../services/i18n';
import { useTranslation } from 'react-i18next';

const languages = {
  en: 'English',
  ka: 'ქართული'
}

const SelectLanguage = () => {
  const { t } = useTranslation();
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-simple-select-label">{t('lang')}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={i18n.resolvedLanguage}
          label="Language"
          onChange={(event) => {
            i18n.changeLanguage(event.target.value);
          }}
        >
          {Object.keys(languages).map((lng) => (<MenuItem key={lng} value={lng}>{languages[lng]}</MenuItem>))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectLanguage;
