import Question from '../../Widget/Question/Question';
import React, {useContext} from 'react';
import AddQuestion from '../../Widget/AddQuestion';
import AddAnswer from '../../Widget/AddAnswer';
import Answer from '../Answer';
import {getAllQuestions, getAllAnswers} from '../../../service.js';
import './Section.css';



// section component that receives sectionType variable
class Section extends React.Component{
    constructor(props){
        super(props)
        this.state={
            question: null,
            questionList:[],  
            answerList:[]   
        }
        
    }
    //function who runs henever the props changes
    componentWillReceiveProps(nextProps){
        this.setState({question:null})
    }
    //This function can render after the page renders
    componentDidMount(){
        getAllQuestions().then(questionList => this.setState({questionList}))
        getAllAnswers().then(answerList => this.setState({answerList}))
    }
    //maps the question list and prints only relevant questions
    getQuestions =() =>{ 
        return (     
            this.state.questionList.map(obj=> 
                {if (obj.sectionTitle === this.props.sectionType)
                    {
                    return(<button className="buttonToSpecificQuestion" type="submit" onClick={()=>this.buttongoToAnswer(obj)}>
                            <Question questionObject={obj}/>
                        </button>)
                    }
                }
            )       
        )  
    }
    //map the answer list and prints only relevant answers
    getAnswers =() =>{ 
        return (     
            this.state.answerList.map(obj=> 
                {if (obj.questionId === this.state.question.id)
                    {
                    return(
                            <Answer answerObject={obj}/> 
                        
                        )
                    }
                }
            )       
        )  
    }
    //button to access the specific question
    buttongoToAnswer =(obj) =>{
        this.setState({question:obj})
    }
    //button to come back to the section
    buttongoToQuestionList =() =>{
        this.setState({question:null})
    }
        
    render(){
        return (
            <div>
                <div className="title">{this.props.sectionType}</div>
                {/* Checks if we are in the question page or in the section page */}
                {this.state.question ? <div>  
                {/* this is the answer page */}
                    <button type="submit" className="buttonQuestionList" onClick={()=> this.buttongoToQuestionList()}>Go back to the question list</button>
                    <Question questionObject= {this.state.question} ></Question> 
                    <AddAnswer className='addAnswer' question={this.state.question}></AddAnswer>
                    {this.getAnswers()}
                    </div> : <div>
                    {/* this is the question page */}
                    <AddQuestion sectionTitle={this.props.sectionType}/>
                {this.getQuestions()}
                </div>
                    }
                
            </div>
        );
    }
}

export default Section;
