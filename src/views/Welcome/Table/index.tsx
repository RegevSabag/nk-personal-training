import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Chip } from '@mui/material';
import { randomColor } from '../../../utils/text';

function Row(props: { row: any, currentOpen: string | null, setCurrentOpen: Function}) {
  const { row, currentOpen, setCurrentOpen } = props;

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => {row.id === currentOpen? setCurrentOpen(null):setCurrentOpen(row.id)}}
          >
            {row.id === currentOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" align="left" scope="row">
          <Typography>{row.name}</Typography>
        </TableCell>
        <TableCell sx={classes.overflowText} align="center">
          {row.description}
        </TableCell>
        <TableCell align="center">
          {row.gender}
        </TableCell>
        <TableCell align="center">
          {row.muscleGroup}
        </TableCell>
        <TableCell align="center">
          {row.centralMuscle}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={currentOpen === row.id} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-between',padding:'10px'}}>
                <Box sx={{textAlign:'left',width:'50%'}}>
                  <Typography sx={{fontSize:'22px',fontWeight:'600'}}>
                    {row.name}
                  </Typography>
                  <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-around', width:'fit-content', padding:'8px 0px'}}>
                    <Chip label={row.gender} sx={{background:randomColor(), fontWeight:'600', margin:'3px'}} />
                    <Chip label={row.muscleGroup} sx={{background:randomColor(), fontWeight:'600', margin:'3px'}} />
                    <Chip label={row.centralMuscle} sx={{background:randomColor(), fontWeight:'600', margin:'3px'}} />
                  </Box>
                  <Typography sx={{fontWeight:'600'}}>
                    {row.description}
                  </Typography>
                </Box>
                <Box sx={{width:'50%',display: 'flex', justifyContent:'center'}} >
                  <img style={{borderRadius:'32px', opacity:0.5}} src={row.urlPhoto} alt="" />
                </Box>
              </Box>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CollapsibleTable() {
  const [currentOpen, setCurrentOpen] = React.useState(null);

  return (
    <TableContainer component={Paper} sx={{width:'100%'}}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell sx={{fontWeight:'700'}} align="left" >שם התרגיל</TableCell>
            <TableCell sx={{fontWeight:'700'}} align="center" >תיאור</TableCell>
            <TableCell sx={{fontWeight:'700'}} align="center" >מין</TableCell>
            <TableCell sx={{fontWeight:'700'}} align="center" >קבוצת שרירים</TableCell>
            <TableCell sx={{fontWeight:'700'}} align="center" >שריר מרכזי</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row 
              key={row.name} 
              row={row} 
              currentOpen={currentOpen} 
              setCurrentOpen={setCurrentOpen} 
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const rows = [
  {
    id:1,
    name: "פולי עליון רחב",
    description: "ישיבה אל מול המכונה, גב 90 מעלות, אחיזה רחבה על המוט, להקפיד על גב ישר לאורך כל ביצוע התרגיל",
    gender: 'כללי',
    muscleGroup: 'גב',
    centralMuscle: 'גב עליון',
    urlPhoto: "https://gymvisual.com/img/p/1/5/2/0/6/15206.gif"
  },
  {
    id:2,
    name: "לחיצת חזה",
    description: "מוט בגובהה עיניים, רגליים נעולות לקרקע, מרפקים בזווית 45 מעלות, גב עם מעט קימור. הורדה של המוט אל גובהה פיטמות",
    gender: 'גבר',
    muscleGroup: 'חזה',
    centralMuscle: 'כל החזה',
    urlPhoto: "https://gymvisual.com/img/p/3/3/1/3/9/33139.gif"
  },
  {
    id:3,
    name: "לחיצת כתפיים - מוט",
    description: "ספסל בשיפוע קל, הרמה של המשקולות אל מעל הכפתיים עד קו הראש וחזרה",
    gender: 'כללי',
    muscleGroup: 'כפתיים',
    centralMuscle: 'כל הכתף',
    urlPhoto: "https://gymvisual.com/img/p/1/5/1/8/7/15187.gif"
  }
];


const classes = {
  overflowText:{
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis', 
    maxWidth: '130px'
  }
}