import React from 'react'
import { Button } from '@mui/material';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import './cards.css';

const Card3 = () => {
    const goBack = () => {
        window.history.back();
    };
  return (
    <div className='head'>
        <h1 className='he1'>AI shopping system</h1>
    <div className='total'>
    <div className='card1'>
    <Card variant="outlined" sx={{width:500,backgroundImage:'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);'}}>
      <Typography level="h1" sx={{fontSize:'x-larger',color:'black'}}>Project 3</Typography>
      <Typography sx={{color:'black'}}>
      Project Head : Ujjual<br></br>
      Team Members : Vino , Sreeya , Mohan , Ashwin <br></br>
      Team ID : TI300 <br></br>
      Project Admin : C <br></br>
      Admin ID : 160 <br></br>
      </Typography>
    </Card>
    </div>
    </div>
    </div>
  );
};
export default Card3;