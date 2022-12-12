import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { v4 } from 'uuid';
import useStatistics from '../../hooks/useStatistics';
import StatisticsFilter from './StatisticsTable/StatisticsFilter/StatisticsFilter';
import StatisticsTable from './StatisticsTable/StatisticsTable';
import Card from '../../components/Card/Card'
import { useTranslation } from 'react-i18next';

const Statistics = () => {
  const { t } = useTranslation();
  const { statistics } = useStatistics();

  const [statisticsReport, setStatisticsReport] = useState({
    death: 0,
    recovered: 0,
    confirmed: 0,
  })

  const [filter, setFilter] = useState(null);

  useEffect(() => {
    if (statistics) {
      const newStatistics = statistics.reduce((prev, curr) => {
        prev.death += curr.death;
        prev.confirmed += curr.confirmed;
        prev.recovered += curr.recovered;
        return prev;
      }, {
        death: 0,
        recovered: 0,
        confirmed: 0,
      });

      setStatisticsReport(newStatistics);
    }
  }, [statistics])

  return (
    <>
      {statisticsReport && (
        <Box
          sx={{ display: 'flex', justifyContent: 'center', gap: '16px' }}
          key={v4()}
        >
          <Card
            title={t('death')}
            text={statisticsReport.death}
            imageName={'death.png'}
          />
          <Card
            title={t('recovered')}
            text={statisticsReport.recovered}
            imageName={'success.png'}
          />
          <Card
            title={t('confirmed')}
            text={statisticsReport.confirmed}
            imageName={'warning.webp'}
          />
        </Box>
      )}
      <StatisticsFilter changeFilter={(val) => setFilter(val)} />
      <StatisticsTable filter={filter} />
    </>
  )
}


export default Statistics;