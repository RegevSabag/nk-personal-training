import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, Chip, Divider, TextField, useTheme } from '@mui/material';
import { useState } from 'react';

export default function BasicModal(props: {openModal: boolean, setOpenModal: Function }) {
  const { openModal, setOpenModal} = props;
  const theme = useTheme();  
  const [form, setForm] = useState({
    name:'', 
    description:'',
    gender:'',
    muscle_group: '', 
    central_muscle: '',
    link:''
  });

  const handleClose = () => {
    setForm({
      name:'', 
      description:'',
      gender:'',
      muscle_group: '', 
      central_muscle: '',
      link:''
    });
    setOpenModal(false);
  };

  const handelOnChangeForm = (attr: string, value: string) => {
    setForm((oldForm) => ({...oldForm, [attr]: value}));
    console.log(form)
  };

  const classes = {
    modal: {
      bgcolor: '#1e1e1e',
      border: '1px solid #000',
      boxShadow: 24,
      borderRadius: '6px',
      position:'absolute',
      display:'block',
      transform: 'translate(-50%, -50%)',
      top:'50%',
      left:'50%',
      overflow:'auto',
      height:'85%',
      width:'70%',
      maxHeight: '480px',
      [theme.breakpoints.down('sm')]: {
        height:'100%',
        width:'100%',
        maxHeight: '100%',
      },
    },
    main: {
      padding:'16px 16px 0px',
      overflow: "auto"
    },
    closeButton: {
      padding: 0
    },
    formContainer: {
      width: "85%",
      alignSelf:'center',
      p: "16px 16px 0px",
      display:'flex',
      flexDirection: 'column',
    },
    textFieldContainer: {
      p:"10px"
    },
    textFieldShort:{
      width:'45%',
      [theme.breakpoints.down('sm')]: {
        width:'95%',
      }
    },
    textFieldLong: {
      width:'75%',
      [theme.breakpoints.down('sm')]: {
        width:'95%'
      }
    },
    chip: {
      margin:"5px",
      fontSize: '20px',
      padding:'7px'
    },
    chipSelected: {
      background: "#f33128",
      fontSize: "23px",
      borderColor: "#f33128",
    },
    chipsGenderContainer: {
      //display: "flex"
    },
    cancelButton: {
      fontSize:18,
      alignSelf:'end',
      height:'fit-content',
      color: '#fff',
      backgroundColor: '#F33128',
      '&:hover': {
        backgroundColor: '#fc756f',
        borderColor:'#000'
      },
    },
    createButton: {
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
    footer: {
      display:"flex",
      justifyContent:'flex-end',
      paddingBottom: '15px',
      width:'94%'
    }
  };

  return (
    <div>
      <Modal
        open={openModal}
        onClose={handleClose}
      >
        <Box sx={classes.modal}>
          <Box sx={classes.main}>
            <Typography variant="h5">
              {"הוסף תרגיל חדש"}
            </Typography>
            <Box sx={classes.formContainer}>
              <Box sx={classes.textFieldContainer}>
                <TextField 
                  value={form.name} 
                  onChange={(value) =>{handelOnChangeForm("name", value.target.value)}} 
                  sx={classes.textFieldShort} 
                  size='small'
                  label="שם התרגיל" 
                  variant="outlined" 
                />
              </Box>
              <Box sx={classes.textFieldContainer}>
                <TextField
                  value={form.description} 
                  onChange={(value) =>{handelOnChangeForm("description", value.target.value)}}
                  sx={classes.textFieldLong}
                  size='small'
                  label="תיאור"
                  placeholder="תיאור"
                  multiline
                />
              </Box>
              <Box sx={classes.chipsGenderContainer}>
                <Chip 
                  sx={form.gender === "אישה"? {...classes.chip, ...classes.chipSelected}: classes.chip} 
                  label="אישה" 
                  variant="outlined" 
                  onClick={() =>{handelOnChangeForm("gender", "אישה")}}   
                  clickable={form.gender !== "אישה"} 
                />
                <Chip 
                  sx={form.gender === "גבר"? {...classes.chip, ...classes.chipSelected}: classes.chip} 
                  label="גבר" 
                  variant="outlined" 
                  onClick={() =>{handelOnChangeForm("gender", "גבר")}}   
                  clickable={form.gender !== "גבר"} 
                />
                <Chip 
                  sx={form.gender === "כללי"? {...classes.chip, ...classes.chipSelected}: classes.chip} 
                  label="כללי" 
                  variant="outlined" 
                  onClick={() =>{handelOnChangeForm("gender", "כללי")}}  
                  clickable={form.gender !== "כללי"} 
                />
              </Box>
              <Divider sx={{marginTop:"10px",marginBottom:'10px'}} light />
              <Box sx={classes.chipsGenderContainer}>
                <Chip clickable={form.muscle_group !== "חזה"}  sx={form.muscle_group === "חזה"? {...classes.chip, ...classes.chipSelected}: classes.chip} label="חזה" variant="outlined" onClick={() => {handelOnChangeForm("muscle_group", "חזה")}} />
                <Chip clickable={form.muscle_group !== "גב"} sx={form.muscle_group === "גב"? {...classes.chip, ...classes.chipSelected}: classes.chip} label="גב" variant="outlined" onClick={() => {handelOnChangeForm("muscle_group", "גב")}} />
                <Chip clickable={form.muscle_group !== "כתפיים"} sx={form.muscle_group === "כתפיים"? {...classes.chip, ...classes.chipSelected}: classes.chip} label="כתפיים" variant="outlined" onClick={() => {handelOnChangeForm("muscle_group", "כתפיים")}} />
                <Chip clickable={form.muscle_group !== "ידיים"} sx={form.muscle_group === "ידיים"? {...classes.chip, ...classes.chipSelected}: classes.chip} label="ידיים" variant="outlined" onClick={() => {handelOnChangeForm("muscle_group", "ידיים")}} />
                <Chip clickable={form.muscle_group !== "ישבן"} sx={form.muscle_group === "ישבן"? {...classes.chip, ...classes.chipSelected}: classes.chip} label="ישבן" variant="outlined" onClick={() => {handelOnChangeForm("muscle_group", "ישבן")}} />
                <Chip clickable={form.muscle_group !== "רגליים"} sx={form.muscle_group === "רגליים"? {...classes.chip, ...classes.chipSelected}: classes.chip} label="רגליים" variant="outlined" onClick={() => {handelOnChangeForm("muscle_group", "רגליים")}} />
                <Box sx={classes.textFieldContainer}>
                  <TextField 
                    sx={classes.textFieldShort} 
                    size='small' 
                    label="שריר מרכזי" 
                    variant="outlined"
                    onChange={(value) =>{handelOnChangeForm("central_muscle", value.target.value)}}
                    value={form.central_muscle} 
                  />
                </Box>
              </Box>
              {/* <Divider sx={{marginTop:"10px",marginBottom:'5px'}} light /> */}
              <Box sx={classes.textFieldContainer}>
                <TextField 
                  sx={classes.textFieldShort} 
                  size='small' 
                  label="לינק לסרטון הדרכה" 
                  variant="outlined" 
                  onChange={(value) =>{handelOnChangeForm("link", value.target.value)}}
                  value={form.link}
                />
              </Box>  
            </Box>
          </Box>
          <Box sx={ classes.footer}>
            <Button size='small' sx={{...classes.createButton, marginRight:'15px'}} variant="outlined" onClick={handleClose}>
              <Typography>בטל</Typography>
            </Button>   
            <Button size='small' sx={classes.cancelButton } onClick={handleClose}>
              <Typography>הוסף תרגיל</Typography>
            </Button>  
          </Box>
        </Box>
      </Modal>
    </div>
  );

}
