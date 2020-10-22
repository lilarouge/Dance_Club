import React, {  useContext } from 'react';
import { Link} from "react-router-dom";
import {userContext} from '../../Context';
import './Profile.css';
import {getAllQuestions, getAllAnswers} from '../../../service.js';


class Profile extends React.Component {
    logOut = () => {
        this.context.setUser(null);
    }
    myQuestions = async () =>{
        let allQuestions = await getAllQuestions (); // how to get only my id questions and how to link it in the return
    }
    myAnswers = async () =>{
        let allAnswers = await getAllAnswers ();
    }
render () {    
return (

<div className='Profile'>


<h3 className= "userNameProfile">{this.context.user.name}</h3>
<h3 className= "userNameProfile">{this.context.user.age}</h3>
<h3 className= "userNameProfile">{this.context.user.occupation}</h3>
<br/>
<li><Link to='/myQuestions' className="nav-link"> My questions </Link></li>
<li><Link to='/myAnswers' className="nav-link"> My answers </Link></li>  
<li><Link to='/Like' className="nav-link"> My likes </Link></li>
<button className= "logButton" type= "button" onClick= {this.logOut}>Log out</button>
<div className="picture3"></div>
</div>
   
 );
}
}
Profile.contextType= userContext;
export default Profile