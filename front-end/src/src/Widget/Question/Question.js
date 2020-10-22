import React from 'react';
import './Question.css';


function Question({questionObject}){
  
  return (
    <div className= "questionContainer">

<h3 className="question">Question asked: <br/><h5 className= "questionAsked">{questionObject.question}</h5>  </h3>
<h4 className="userName">by <h6 className= "userDetails">{questionObject.user.name}</h6></h4>
<h4 className="date">on the <h6 className= "userDetails">{questionObject.date}</h6></h4>


</div>

);

}
export default Question