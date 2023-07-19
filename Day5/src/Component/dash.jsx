import React from 'react'
import './dash.css';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
const Dash = () => {
  return (
    <div>
        <div class="leftnav">
        <a class="active" href="#home">DashBoard</a>
        <a href="#news">Home</a>
        <a href="/Profile">Profile</a>
        <a href="/Task">Task Tracking</a>
        </div>
        <div className='wel'>
          <fieldset className='field'>
            Welcome User !
          </fieldset>
        </div>
      <button><div class="button">
      <Link to='/'>Logout</Link>
      </div></button>
    </div>
  )
}

export default Dash