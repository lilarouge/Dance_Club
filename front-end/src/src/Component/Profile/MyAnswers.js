import Answer from '../../Component/Answer';
import React, {useContext} from 'react';
import {userContext} from '../../Context';
import {getAllAnswers} from '../../../service.js';

// section component that receives sectionType variable
class MyAnswers extends React.Component{
    constructor(props){
        super(props)
        this.state={
            answerList:[] 
        }
        
    }
    //This function can render after the page renders
    componentDidMount(){
        getAllAnswers().then(answerList => this.setState({answerList}))
    }
    //maps the question list and prints only relevant questions
    getAnswers =() =>{ 
        return (     
            this.state.answerList.map(obj=> 
                {if (obj.user.id === this.context.user.id)
                    {
                    return(
                            <Answer answerObject={obj}/>    
                    )
                    }
                }
            )       
        )  
    }
    
  
        
    render(){
        return (
            <div>
                <div className="title">My Answers</div>
                    {/* For each question inside the Questions array, print the question component if the question is relevent to the page */}
                {this.getAnswers()}   
            </div>
        );
    }
}
MyAnswers.contextType= userContext;
export default MyAnswers;
