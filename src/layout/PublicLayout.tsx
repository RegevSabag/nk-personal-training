import { FunctionComponent, PropsWithChildren } from 'react';
import { Stack, Typography, Box, Button } from '@mui/material/';
import { useSelector, useDispatch } from 'react-redux';
import TopBar from './TopBar';
import type { RootState } from '../store';
import { setCurrentRoute } from '../store/general';
import { TOP_BAR_DESKTOP_HEIGHT, TOP_BAR_MENU_LIST } from './config';

/**
 * Renders "Public Layout" composition
 * @layout PublicLayout
 */
const PublicLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const currentRoute = useSelector((state: RootState) => state.general.currentRoute);
  const dispatch = useDispatch();

  const redirectTo = (route: string) => {
    if(currentRoute !== route){
      dispatch(setCurrentRoute(route));
    }
  }

  const startNode = (
    <>
    <Box sx={{display:'flex', flexDirection:'row'}}>
      <Typography sx={{...classes.textIcon, color:"#F33128"}}>{"K"}</Typography>
      <Typography sx={classes.textIcon}>{"N"}</Typography>
    </Box>
      <Box sx={classes.boxButton}>
        {TOP_BAR_MENU_LIST.map((item) => (
          <Button key={item} onClick={() => {redirectTo(item)}}>
            <Typography 
              sx={currentRoute === item? {...classes.buttonText, ...classes.buttonTextSelected}: classes.buttonText}
            > 
              {item}
            </Typography>
          </Button>
        ))}
      </Box>
    </>
  )

  return (
    <Stack
      sx={classes.fullPage}
    >
      <Stack component="header">
        <TopBar
          // endNode={startNode}
          startNode={startNode}
        />
      </Stack>
      <Stack
        component="main"
        sx={classes.mainPage}
      >
        {children}
      </Stack>
    </Stack>
  );
};

const classes = {
  fullPage: {
    minHeight: '100%', // Full screen height
    paddingTop: TOP_BAR_DESKTOP_HEIGHT,
  },
  mainPage: {
    flexGrow: 1,
    padding: 1,
    height: `calc(100vh - ${TOP_BAR_DESKTOP_HEIGHT})` 
  },
  buttonText: {
    color:"#ffffff", 
  },
  buttonTextSelected: {
    fontWeight:'900',
    color: '#f33128'
  },
  textIcon: {
    fontWeight:'900',
    fontSize:'2rem'
  },
  boxButton:{ 
    marginRight:'20px' 
  }
}

export default PublicLayout;
