import React from 'react'
import { Button } from '@mui/material';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import './cards.css';
import { useNavigate } from 'react-router-dom';

const Card1 = () => {
  return (
    <div className='head'>
        <h1 className='he1'>Android task monitoring</h1>
    <div className='card1'>
        
    <Card variant="outlined" sx={{width:500,backgroundImage:'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);'}}>
      <Typography level="h1" sx={{fontSize:'x-larger',color:'black'}}>Project 1</Typography>
      <Typography sx={{color:'black'}}>
      Project Head : Sairam<br></br>
      Team Members : Siva , Sudhir , Yuvan , Thirumal <br></br>
      Team ID : TI100 <br></br>
      Project Admin : A <br></br>
      Admin ID : 123 <br></br>
      </Typography>
    </Card>
    </div>
    </div>
  );
};
export default Card1;