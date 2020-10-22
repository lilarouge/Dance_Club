import React, { useState, useContext } from 'react';
import {userContext} from '../../Context';
import {addANewUser, getUserByEmail} from '../../../service.js';


class Register extends React.Component {

    state = {email: "",password: "",password2: "",name: "", age:"", occupation:""}

    checkAge = () =>{
        if(this.state.age===""){
            alert ('You need to fill all the parameters!')
            return false;
        }else if (this.state.age < 16){
            alert('You are too young to register!')
            return false;
        }
        return true;
    }
        checkPassword =() =>{
            if(this.state.password !== this.state.password2){
                alert("You need to enter the same password !")
                return false;
            }else if(this.state.password.length < 8) {
                alert('The password submitted has ' + this.state.password.length + ' characters. It should have minimum 8 characters.');
             return false;
         }
        return true;
    }
        checkName =() =>{
            if(this.state.name===""){
                alert ('You need to fill all the parameters!')
            return false;
            }
        return true;
    }
        checkOccupation =() =>{
            if(this.state.occupation ===""){
                alert ('You need to fill all the parameters!')
            return false;
            }
        return true;
    }

        checkEmail= async() =>{
            if(this.state.email ===""){
                alert ('You need to fill all the parameters!')
                return false;
            }
          
        return true;
    }

    handleSubmit = async() => {
        console.log(this.checkEmail)
      if (this.checkName() && this.checkAge() && this.checkEmail() && this.checkPassword() && this.checkOccupation()){
          const user= {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            age: this.state.age,
            occupation: this.state.occupation
          }
          const newUser= await addANewUser(user);
          if (newUser){
         this.context.setUser(newUser);
         setTimeout(() => console.log(JSON.stringify( this.context.user, null, 2)), 1);
          }
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
                <h2 className= "title">Register</h2>
                <br/>

            <input defaultValue={this.state.name}
                id="name"
                className= "input"
                placeholder="Name *"
                type="text"
                onChange={this.onChange}/>
                <br/>
            <input defaultValue={this.state.age}
                id="age"
                className= "input"
                placeholder="Age *"
                type="text"
                onChange={this.onChange}/>
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

            <input defaultValue={this.state.password2}
                id="password2"
                className= "input"
                placeholder="Confirm your password*"
                type="password"
                onChange={this.onChange} />
                <br/>

            <input defaultValue={this.state.occupation}
                id="occupation"
                className= "input"
                placeholder="Occupation *"
                type="text"
                onChange={this.onChange}/>
                <br/>
            
            <button className= "button" type="submit" onClick={this.handleSubmit}> Create my account </button>
            </div>
        </div>
        )
    }
}


Register.contextType= userContext;
export default Register;
