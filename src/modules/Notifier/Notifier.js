import { Card } from '@mui/material';
import { useEffect } from 'react';
import useNotifier from "../../hooks/useNotifier";
import { useTranslation } from 'react-i18next';

const Notifier = () => {
  const { t } = useTranslation()
  const { message, isError, setNotification } = useNotifier();

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        setNotification(null);
      }, 2500);
    }
  }, [message]);

  return message && (
    <Card
      sx={{
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: '0',
        color: 'white',
        height: '48px',
        padding: '8px',
        width: '100%',
        '@media screen and (min-width: 40em)': {
          width: '240px',
        },
        ...(isError
          ? { left: '0', backgroundColor: 'red' }
          : { right: '0', backgroundColor: 'green' }),
      }}
      className={`absolute ${!isError ? 'left-0' : 'right-0'} bottom-0 ${isError ? 'bg-red-600' : 'bg-green-600'} p-2 rounded-md text-white w-full sm:w-64 h-16 flex items-center justify-center`}
    >
      {t(message)}
    </Card>
  );
};

export default Notifier;
