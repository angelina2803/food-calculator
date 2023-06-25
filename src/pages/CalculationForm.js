import React from 'react';
import "../styles/App.css";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import myImage from "../img/ovoce.png";


const CalculationForm = ({data}) => {


    return (
        <div> <img src={myImage} alt="ovoce" className='ovoceImage'/>
        <h3 className='ovoceText'>Calculate your calories</h3>
        <div className='table'>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, height:'250px'}} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>№</TableCell>
            <TableCell align="right">Nazev</TableCell>
            <TableCell align="right">Množství&nbsp;(ks)</TableCell>
            <TableCell align="right">Kalorie</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((el) => (
            <TableRow
              key={el.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0} }}
            >
              <TableCell component="th" scope="row">
                {data.name}
              </TableCell>
              <TableCell align="right">{data.text}</TableCell>
              <TableCell align="right">{data.counter}</TableCell>
              <TableCell align="right">{data.calories}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <h3 className='ovoceText2'>Kalorie celkem: </h3>
    </div>
    </div>
  );
};

export default CalculationForm;