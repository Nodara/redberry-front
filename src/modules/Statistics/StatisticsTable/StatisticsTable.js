import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import useStatistics from '../../../hooks/useStatistics';
import StatisticsTableHead from './StatisticsTableHead/StatisticsTableHead';
import { getComparator } from '../../../utils/utils';
import i18n from '../../../services/i18n';
import { v4 } from 'uuid';

const StatisticsTable = (props) => {
  const { filter } = props;

  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('');

  const { statistics, getStatistics } = useStatistics();

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  useEffect(() => {
    getStatistics();
  }, []);

  return (statistics.length && (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
          >
            <StatisticsTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={statistics.length}
            />
            {/* shift is needed to remove id property, because filter can be equal to id */}
            <TableBody>
              {
                (filter ? [[].concat(statistics).shift()].filter((row) => Object.values(row).includes(filter)) : [].concat(statistics))
                  .sort(getComparator(order, orderBy))
                  .map((row) => {
                    return (
                      <TableRow
                        key={v4()}
                      >
                        <TableCell align="center">{row.country.name[i18n.resolvedLanguage]}</TableCell>
                        <TableCell align="center">{row.confirmed}</TableCell>
                        <TableCell align="center">{row.recovered}</TableCell>
                        <TableCell align="center">{row.death}</TableCell>
                      </TableRow>
                    );
                  })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>)
  );
}

export default StatisticsTable;