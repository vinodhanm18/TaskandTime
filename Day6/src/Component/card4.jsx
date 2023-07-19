import React from 'react'
import { Button } from '@mui/material';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import './cards.css';

const Card4 = () => {
    const goBack = () => {
        window.history.back();
    };
  return (
    <div className='head'>
        <h1 className='he1'>e-Learning platform</h1>
    <div className='total'>
    <div className='card1'>
    <Card variant="outlined" sx={{width:500,backgroundImage:'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);'}}>
      <Typography level="h1" sx={{fontSize:'x-larger',color:'black'}}>Project 4 
      </Typography>
      <Typography sx={{color:'black'}}>
      Project Head : Deva<br></br>
      Team Members : Aishu , Niki , Deepak , Salman <br></br>
      Team ID : TI400 <br></br>
      Project Admin : D <br></br>
      Admin ID : 149 <br></br>
      </Typography>
    </Card>
    </div>
    </div>
    </div>
  );
};
export default Card4;
