var express = require('express');
var router = express.Router();
const { json } = require('express');
var fs = require('fs');
var path = require('path');

const requestPath= path.normalize('../back-end/DataBase/questions.json');

//CRUD function
/* GET users listing. */
router.get('/', function(req, res, next) {
  let questions= JSON.parse(fs.readFileSync(requestPath));
  res.send(questions);
});
//Get for a specific question
router.get('/:id', function (req, res, next){
  let questions= JSON.parse(fs.readFileSync(requestPath)); 
  const id= req.params.id;//saves the id received from the request
  const questionsIndex= questions.findIndex (obj=> obj.id == id)//saves the index of the user id that equals to the id
  if (questionsIndex == -1){//checking if user exists
    return res.status(440).send ("Question doesn't exist")//return a not found response
  }
  return res.send(questions[questionsIndex]);//return the question (so the object inside the array)
});

// Post
router.post("/", (req, res) => {
  let data= JSON.parse(fs.readFileSync(requestPath));
  //req body is what we get with the post request
  data.push({id:data.length +1, ...req.body});//adding a new user inside the data variable
  fs.writeFileSync(requestPath,JSON.stringify(data, null, 2));//rewriting the json users adding a new user to what was already
res.send('Ok');//sending a response
});


//Put - to update
router.put("/:id", (req, res) => {
  let questions= JSON.parse(fs.readFileSync(requestPath)); 
  const id= req.params.id;//saves the id received from the request
  const questionsIndex= questions.findIndex (obj=> obj.id == id)//saves the index of the user id that equals to the id
  if (questionsIndex == -1){//checking if question exists
    return res.status(440).send ("Question doesn't exist")//return a not found response
  }
  questions[questionsIndex] = {...questions[questionsIndex], ...req.body} //save the old user object and rewrite only the parameter received in the body
  fs.writeFileSync(requestPath, JSON.stringify (questions, null, 2)); //write the new parameter
  return res.send ('finished running'); //sends the response
});

//Delete
router.delete("/:id", (req, res) => {
  let questions= JSON.parse(fs.readFileSync(requestPath)); 
  const id= req.params.id;//saves the id received from the request
  const questionsIndex= questions.findIndex (obj=> obj.id == id)//saves the index of the user id that equals to the id
  if (questionsIndex == -1){//checking if user exists
    return res.status(440).send ("Question doesn't exist")//return a not found response
  }
  users.splice(questionsIndex, 1); //deleting from the array 1 user from the index
  fs.writeFileSync(requestPath, JSON.stringify (questions, null, 2)); //write the new parameter
  return res.send ('finished running'); //sends the response
});


module.exports = router;