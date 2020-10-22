import React from 'react';




function Answer({answerObject}) {

return (
<div className="questionContainer">
<h5 className="questionAsked">{answerObject.answer}</h5> 
<h4 className="userName">by <h6 className="userDetails">{answerObject.user.name}</h6></h4>
<h4 className="date">on the <h6 className="userDetails">{answerObject.date}</h6></h4>


</div>

);

}
export default Answer