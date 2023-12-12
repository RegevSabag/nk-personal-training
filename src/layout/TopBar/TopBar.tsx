import { AppBar, Toolbar } from '@mui/material';
import { FunctionComponent, ReactNode } from 'react';

interface Props {
  endNode?: ReactNode;
  startNode?: ReactNode;
}
/**
 * Renders TopBar composition
 * @component TopBar
 */
const TopBar: FunctionComponent<Props> = ({ endNode, startNode, ...restOfProps }) => {
  return (
    <AppBar
      component="div"
      sx={classes.appBar}
      {...restOfProps}
    >
      <Toolbar disableGutters sx={{ paddingX: 1 }}>
        {startNode}
        {endNode}
      </Toolbar>
    </AppBar>
  );
};

const classes = {
  appBar: {
    boxShadow: 'none'
  }
}

export default TopBar;
