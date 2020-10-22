const server = 'http://localhost:3000/';
const options= {mode: 'cors', headers: {'Content-Type':'application/json'}}

//function for users json file

export const getAllUsers = async () =>{
    //fetch sends the request path and options
    //then setting the response to be a json response
    
    const res = await fetch(server + 'users/', options);
    const fetchdata= await res.json();
       
    return fetchdata;
}

export const addANewUser = async (user) =>{
    const res= await fetch(server + 'users/', {
        ...options,
        method: 'POST',
        headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
        },
        body: JSON.stringify(
            user
        )
        })
        const fetchdata= await res.json();
       return fetchdata;
}
// function for all question json file

export const getAllQuestions = async () =>{

    const res = await fetch(server + 'questions/', options);
    const fetchdata = await res.json();

    return fetchdata;

}
// function for getting all answers json file

export const getAllAnswers = async () =>{

    const res = await fetch(server + 'answers/', options);
    const fetchdata = await res.json();

    return fetchdata;
} 
// function adding an answer --POST
export const addANewAnswer = async (answer) =>{
     await fetch(server + 'answers/', {
        ...options,
        method: 'POST',
        headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
        },
        body: JSON.stringify(
            answer
        )
        })
}
// function adding a question --POST
export const addANewQuestion = async (question) =>{
    await fetch(server + 'questions/', {
        ...options,
        method: 'POST',
        headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
        },
        body: JSON.stringify(
            question
        )
        })
}


