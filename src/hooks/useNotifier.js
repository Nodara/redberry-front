import { selectNotifier, setNotification, setNotificationType } from '../modules/Notifier/notifier.slice'

import { useDispatch, useSelector } from 'react-redux';


const useNotifier = () => {
  const dispatch = useDispatch();
  const notifierState = useSelector(selectNotifier);

  return {
    ...notifierState,
    setNotification: (payload) => dispatch(setNotification(payload)),
    setNotificationType: (payload) => dispatch(setNotificationType(payload))
  }
};

export default useNotifier;
