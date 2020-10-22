import React, {Component, useContext, useState, useMemo} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { render } from 'react-dom';
import './App.css';
import Login from './Component/Login-Register/Login';
import Section from './Component/Section/Section';
import Profile from './Component/Profile/Profile';
import NavigationBar from './Component/NavigationBar/NavigationBar';
import {userContext} from './Context';
import Register from './Component/Login-Register/Register';
import MyQuestions from './Component/Profile/MyQuestions';
import MyAnswers from './Component/Profile/MyAnswers';


  

function App() {

  const [user, setUser] = useState(null);
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);


  return (
    <userContext.Provider value={value}>
    <Router>
    <div className="App">
     
      <NavigationBar/>
  
     <Switch>

              <Route exact path='/'>
                {user? (<Profile/>):(<Login/>)}
              </Route>
              <Route path='/profile'>
                {user? (<Profile/>):(<Login/>)}
              </Route>
              <Route path='/audition'>
                {user? (<Section sectionType="audition"/>):(<Login/>)}
              </Route> 
              <Route path='/artisticInspirations'>
                {user? (<Section sectionType="artistic inspirations"/>):(<Login/>)}
              </Route> 
              <Route path='/juridicalQuestions'>
                {user? (<Section sectionType="juridical question"/>):(<Login/>)}
              </Route> 
              <Route path='/register' >
                {user? (<Profile/>):(<Register/>)}
              </Route> 
              <Route path='/myQuestions'>
                {user?(<MyQuestions/>):(<Login/>)}
              </Route>
              <Route path='/myAnswers'>
                {user?(<MyAnswers/>):(<Login/>)}
              </Route>
              
              {/* <Route path='/addAnswer' component= {AddAnswer}></Route>  */}
              
            
          </Switch>
        </div>
      </Router>
      </userContext.Provider>
    );
  }

  

export default App;
