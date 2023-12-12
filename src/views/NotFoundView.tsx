import { Typography } from '@mui/material';
/**
 * "Not Found" aka "Error 404" view
 * url: any unknown :)
 * @page NotFoundView
 */
const NotFoundView = () => {

  return (
    <div>
      <Typography variant="h3">Page not found!</Typography>
      <Typography variant="body1">
        Requested address is unknown, please check your URL or go to the
      </Typography>
    </div>
  );
};

export default NotFoundView;
