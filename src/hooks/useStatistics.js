import { useDispatch, useSelector } from 'react-redux';
import { selectStatistics } from '../modules/Statistics/statistics.slice'
import { getStatistics } from '../modules/Statistics/statistics.api'


const useStatistics = () => {
  const dispatch = useDispatch();
  const statisticsState = useSelector(selectStatistics);

  return {
    ...statisticsState,
    getStatistics: () => dispatch(getStatistics()),
  }

};

export default useStatistics;
