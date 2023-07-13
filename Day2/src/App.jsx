import React from 'react';
import './App.css';
function App() {
  return (
    <div className="contain">
      
      <center><h1 className='head'>Join</h1></center>
      <form className="registration">
        <fieldset className='fork'>
        <div className="form-group">
          <label htmlFor="username">Username:</label> 
          <input type="text" id="username" className="form-control" required/>
        </div><br></br>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" className="form-control" required/>
        </div><br></br>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" className="form-control" required/>
        </div><br></br>
        
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" className="form-control" required/>
        </div><br></br>
        <button type="submit" className="button">Register</button>
        </fieldset>
      </form>
    </div>
  );
}``

export default App;





