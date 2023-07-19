import React from 'react'
import { Button } from '@mui/material';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import './task.css';
import { NavLink, useNavigate } from 'react-router-dom';

const Task = () => {
    const goBack = () => {
        window.history.back();
    };
    const nav = useNavigate();
  return (
    <div className='head'>
        <h1 className='he1'>Task Tracking</h1>
    <div className='total'>
    <div className='card1'>
    <Card onClick={() => nav('/card1')}  variant="outlined" sx={{width:500,backgroundImage:'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);'}}>
      <Typography level="h1" sx={{fontSize:'x-larger',color:'black'}}>Project 1</Typography>
      <Typography sx={{color:'black'}}>
      Project : Android task monitoring<br></br>
      Admin_ID : 123<br></br>
      Team : Alpha<br></br>
      Duration : 2 months<br></br>
      </Typography>
      
    </Card>
    </div>
    <div className='card2'>
    <Card onClick={() => nav('/card2')} variant="outlined" sx={{width:500,backgroundImage:'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)'}}>
      <Typography level="h1" sx={{fontSize:'x-larger'}}>Project 2</Typography>
      <Typography>
      Project : Weather forecasting system<br></br>
      Admin_ID : 126<br></br>
      Team : Bravo<br></br>
      Duration : 1/2 months<br></br></Typography>
      
    </Card>
    </div>
    <div className='card3'>
    <Card onClick={() => nav('/card3')} variant="outlined" sx={{width:500,backgroundImage:'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)'}}>
      <Typography level="h1" sx={{fontSize:'x-larger'}}>Project 3</Typography>
      <Typography>
      Project : AI shopping system<br></br>
      Admin_ID : 160<br></br>
      Team : Beta<br></br>
      Duration : 22 days<br></br>
      </Typography>
      
    </Card>
    </div>
    <div className='card4'>
    <Card onClick={() => nav('/card4')} variant="outlined" sx={{width:500,backgroundImage:'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)'}} className='card'>
      <Typography level="h1" sx={{fontSize:'x-larger'}}>Project 4</Typography>
      <Typography>
      Project : e-Learning platform<br></br>
      Admin_ID : 149<br></br>
      Team : Gamma<br></br>
      Duration : 7 days<br></br>
      </Typography>
      
    </Card></div>
    </div>

    </div>

  );
};

export default Task;