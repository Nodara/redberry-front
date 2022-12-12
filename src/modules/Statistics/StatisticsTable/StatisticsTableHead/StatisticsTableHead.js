import { TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material";

import headCells from '../statisticsTableCells';
import { PropTypes } from 'prop-types';
import { useTranslation } from 'react-i18next';
import { v4 } from 'uuid';


const StatisticsTableHead = (props) => {
  const { t } = useTranslation();

  const { order, orderBy, onRequestSort } = props;

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (headCell.sortable ? (
          <TableCell
            key={v4()}
            align='center'
            sortDirection={orderBy === headCell.label ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.label}
              direction={orderBy === headCell.label ? order : 'asc'}
              onClick={createSortHandler(headCell.label)}
            >
              {t(headCell.label)}
            </TableSortLabel>
          </TableCell>
        )
          :
          (
            <TableCell
              key={headCell.label}
              align='center'
            >
              {t(headCell.label)}
            </TableCell>)))}
      </TableRow>
    </TableHead>
  );
}

StatisticsTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
};

export default StatisticsTableHead;