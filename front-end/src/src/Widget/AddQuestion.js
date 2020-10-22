
import React, { useState } from 'react'
import {addANewQuestion} from '../../service.js'
import {userContext} from '../Context';
      
class AddQuestion extends React.Component {

  constructor(props){
    super(props)
    this.state={
      question: ""
    }
  }
  //create a validation form
  isValid = async () =>{
    if(this.state.question=="" ){
        alert("You need to enter your question!")
        return false;
    }
    return true;
  }
  handleSubmit = async() => {
    console.log(this.isValid());
    if (this.isValid){
      const date= new Date()
      const dateInFormat= date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear()
      const question ={
    "user": this.context.user,
    "date": dateInFormat,
    "question": this.state.question,
    "sectionTitle": this.props.sectionTitle
      }
      addANewQuestion(question)
    }   
  }

  
  onChange = ( e) => {

    const {id, value} = e.target;
    this.setState({[id]: value});


}


render ()
{
    return (
    <div>

        <input className="input" defaultValue={this.state.question}
            id="question"
            placeholder="Enter your question"
            type="text"
            onChange={this.onChange}/>
            <button className="button" type="submit" onClick={this.handleSubmit}> submit </button>

</div>
)
}
}
AddQuestion.contextType= userContext;
export default AddQuestion