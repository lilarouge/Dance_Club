import Question from '../../Widget/Question/Question';
import React, {useContext} from 'react';
import {userContext} from '../../Context';
import {getAllQuestions} from '../../../service.js';

// section component that receives sectionType variable
class MyQuestions extends React.Component{
    constructor(props){
        super(props)
        this.state={
            question: null,
            questionList:[] 
        }
        
    }
    //This function can render after the page renders
    componentDidMount(){
        getAllQuestions().then(questionList => this.setState({questionList}))
    }
    //maps the question list and prints only relevant questions
    getQuestions =() =>{ 
        return (     
            this.state.questionList.map(obj=> 
                {if (obj.user.id === this.context.user.id)
                    {
                    return(
                            <Question questionObject={obj}/>    
                    )
                    }
                }
            )       
        )  
    }
    
  
        
    render(){
        return (
            <div>
                <div className="title">My Questions</div>
                    {/* For each question inside the Questions array, print the question component if the question is relevent to the page */}
                {this.getQuestions()}   
            </div>
        );
    }
}
MyQuestions.contextType= userContext;
export default MyQuestions;
