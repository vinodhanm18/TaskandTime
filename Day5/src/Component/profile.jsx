import React from 'react';
import './profile.css';
import image from './icon.gif';   
function Profile() {
  return (
    <div className="contain">
      <h1 className='head'>
      <img src={image} style={{width:'30%',height:'30%'}}></img></h1>
      <form className="registration">
        <fieldset className='fork'>
        <div className="form-group">
          <label htmlFor="username">Username:</label><br></br>
          <input type="text" id="username" className="form-control" required/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label><br></br>
          <input type="email" id="email" className="form-control" required/>
        </div>
        <div className="form-group">
          <label htmlFor="IPAddress">IPAddress:</label><br></br>
          <input type="text" id="IPAddress" className="form-control" required/>
        </div>
        <div className="form-group">
          <label htmlFor="Tasks">Tasks</label><br></br>
          <input type="text" id="Tasks" className="form-control" required/>
        </div>
        <div className="form-group">
          <label htmlFor="Deadlines">Deadlines</label><br></br>
          <input type="text" id="Deadlines" className="form-control" required/>
        </div>
        <button type="submit" className="button">Update</button>
        </fieldset>
      </form>
    </div> 
  );
}

export default Profile;