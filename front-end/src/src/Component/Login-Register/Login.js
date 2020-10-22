import React, { useState, useContext } from 'react';
import {userContext} from '../../Context';
import { Link} from "react-router-dom";
import './Login-Register.css';
import {getAllUsers} from '../../../service.js';


class Login extends React.Component {

    state = {email: "",password: ""}
    
    handleSubmit = async () => {
        
        //get the Users array from the server;
        
        let allUsers= await getAllUsers();
        
        //searching if the user email+password exists
        const user= allUsers.find(obj => (obj.email == this.state.email) && (obj.password == this.state.password))
        if (user == undefined){
            alert("unknown user or unknown password")
        }else {
            this.context.setUser(user);
        setTimeout(() => console.log(JSON.stringify( this.context.user, null, 2)), 1);
        
    }
        

    }

    onChange = ( e) => {

        const {id, value} = e.target;
        this.setState({[id]: value});
            
    }


    render ()
    {
        return (
        <div className= "container">
            <div className= "picture"></div>
            <div className= "formContainer">
                <h2 className= "title">Login</h2>
                <br/>
            <input defaultValue={this.state.email}
                id="email"
                className= "input"
                placeholder="Email Adress *"
                type="text"
                onChange={this.onChange}/>
                <br/>

            <input defaultValue={this.state.password}
                id="password"
                className= "input"
                placeholder="Password*"
                type="password"
                onChange={this.onChange} />
                <br/>

            <button className="button" type="submit" onClick={this.handleSubmit}> sign in </button>
            <br/>

                
                     <Link to='/Register' className="link"> register </Link>
               
            </div>
        </div>
        )
    }
}


Login.contextType= userContext;
export default Login