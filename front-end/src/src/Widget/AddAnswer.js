
import React, { useState } from 'react'
import {addANewAnswer, addANewQuestion} from '../../service.js'
import {userContext} from '../Context';

      
class AddAnswer extends React.Component {

  constructor(props){
    super(props)
    this.state={
      answer: ""
    }
  }

  
  isValid = async () =>{
    if(this.state.answer=="" ){
        alert("You need to enter your answer!")
        return false;
    }
    return true;
  }
  handleSubmit = async() => { 
    if (this.isValid() ){
      //Generating a date in the right format DD/MM/YYYY
      const date = new Date()
      const dateInFormat=date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear()
      const answer= {
    "user": this.context.user,
    "date": dateInFormat,
    "answer": this.state.answer,
    "section": this.props.question.sectionTitle,
    "questionId": this.props.question.id
      }
      // addANewAnswer(answer)
      
      console.log(answer)
      console.log(dateInFormat)
      addANewAnswer(answer)
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

        <input defaultValue={this.state.answer}
            id="answer"
            placeholder="Enter your answer"
            type="text"
            className="input"
            onChange={this.onChange}/>
            <button className="button" type="submit" onClick={this.handleSubmit}> submit </button>

</div>
)
}
}
AddAnswer.contextType= userContext;
export default AddAnswer