import { Button, Typography } from '@mui/material';
// import { useSelector, useDispatch } from 'react-redux';
import AppView from '../../components/AppView';
import Table from './Table';
import Modal from './Modal';
import { useState } from 'react';
// import type { RootState } from '../../store';

/**
 * Renders "About" view
 * url: /about
 * @page About
 */

export type Exercise = {
  name: string,
  description: string,
  gender: 'דבר' | 'אישה' | 'כללי',
  muscleGroup: 'חזה'| 'ידיים'| 'רגליים' | 'כפתיים' | 'גב' | 'ישבן' | 'בטן',
  centralMuscle: string,
  urlPhoto: string
}

const WelcomeView = () => {
  // const count = useSelector((state: RootState) => state.counter.value);
  // const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);

  const onClickAddExercise = () => {
    setOpenModal(true);
  }

  return (
    <AppView>
      <div style={classes.header}>
        <Typography sx={classes.headerText}>תרגילים</Typography>
        <Button size='small' sx={classes.addButton} variant="outlined" onClick={onClickAddExercise}>
          <Typography>הוסף תרגיל</Typography>
        </Button>        
      </div>
      <Table />
      <Modal 
        openModal={openModal} 
        setOpenModal={setOpenModal}
      />
    </AppView>
  );
};

const classes = {
  header: {    
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem"
  },
  headerText: {
    fontSize:"40px",
    fontWeight: '700'
  },
  addButton: {
    fontSize:18,
    alignSelf:'end',
    height:'fit-content',
    color: '#fff',
    borderColor:'#F33128',
    '&:hover': {
      backgroundColor: '#F33128',
      borderColor:'#000'
  },
  },
  addButtonIcon: {
    margin:0,
    fontSize:25,
    color: '#f33128'
  }
}

export default WelcomeView;
