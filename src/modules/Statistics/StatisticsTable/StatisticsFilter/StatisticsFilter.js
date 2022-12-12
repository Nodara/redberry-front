
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';

import {
  Button,
  Box, TextField, AccordionDetails, Paper,
} from '@mui/material';

const StatisticsFilter = (props) => {
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: {
      filter: ''
    },
    onSubmit: (values) => {
      // filter's type is text, if Number(values.filter) can't be casted to integer, it must be title, against anything than title 
      props.changeFilter(Number(values.filter) || values.filter);
    },
    onReset: () => {
      props.changeFilter();
    }
  });

  return (
    <Box
      component={Paper}
      sx={{
        border: 0,
        boxShadow: 0,
        borderRadius: '4px',
      }}
    >
      <AccordionDetails>
        <Box
          sx={{
            padding: '10px',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            justifyItems: 'end',
            gap: '10px',
          }}
          component="form"
          autoComplete="off"
        >
          <TextField
            label={t('filter')}
            name="filter"
            variant="outlined"
            size="small"
            color="secondary"
            fullWidth
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.filter}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="small"
            fullWidth
            onClick={formik.handleSubmit}
          >
            {t('find')}
          </Button>

          <Button
            type="reset"
            variant="contained"
            color="secondary"
            fullWidth
            onClick={() => {
              formik.handleReset();
            }}
          >
            {t('clearFilter')}
          </Button>
        </Box>
      </AccordionDetails>
    </Box>
  );
};

export default StatisticsFilter;