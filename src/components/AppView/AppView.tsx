import { FunctionComponent, PropsWithChildren } from 'react';
import { Stack, StackProps } from '@mui/material';

/**
 * Renders View container composition with limited width
 * @component AppView
 */
const AppView: FunctionComponent<PropsWithChildren<StackProps>> = ({ children, minWidth, ...restOfProps }) => {

  return (
    <Stack sx={{width:'100%', height:'100%'}} {...restOfProps}>
      {children}
    </Stack>
  );
};

export default AppView;
