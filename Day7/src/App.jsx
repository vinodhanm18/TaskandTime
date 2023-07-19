import { Route, Routes } from 'react-router-dom';
import { ReactDOM } from 'react-dom';
import Signup from './Component/Signup.jsx';
import Login from './Component/Login.jsx';
import React from 'react';
import Profile from './Component/profile.jsx';
import Task from './Component/task.jx';
import Dash from './Component/dash.jsx';
import Card1 from './Component/card1.jsx';2*6
import Card2 from './Component/card2.jsx';
import Card3 from './Component/card3.jsx';
import Card4 from './Component/card4.jsx';
function App(){
    return(
            <Routes>
                <Route exact path='/'element={<Login/>}/>
                <Route exact path='/Signup'element={<Signup/>}/>
                <Route exact path='/Dash'element={<Dash/>}/>
                <Route exact path='/Profile'element={<Profile/>}/>
                <Route exact path="/Task" element={<Task/>}/>
                <Route exact path="/card1" element={<Card1/>}/>
                <Route exact path="/card2" element={<Card2/>}/>
                <Route exact path="/card3" element={<Card3/>}/>
                <Route exact path="/card4" element={<Card4/>}/>
            </Routes>
    );
}

export default App;
