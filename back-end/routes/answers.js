var express = require('express');
var router = express.Router();
const { json } = require('express');
var fs = require('fs');
var path = require('path');

const requestPath = path.normalize('../back-end/DataBase/answers.json');
/* GET users listing. */
router.get('/', function(req, res, next) {
  let answers= JSON.parse(fs.readFileSync(requestPath));
  res.send(answers);
});

//Get for a specific answer
router.get('/:id', function (req, res, next){
  let answers= JSON.parse(fs.readFileSync(requestPath)); 
  const id= req.params.id;//saves the id received from the request
  const answersIndex= answers.findIndex (obj=> obj.id == id)//saves the index of the user id that equals to the id
  if (answersIndex == -1){//checking if user exists
    return res.status(440).send ("Answer doesn't exist")//return a not found response
  }
  return res.send(answers[answersIndex]);//return the answer (so the object inside the array)
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
  let answers= JSON.parse(fs.readFileSync(requestPath)); 
  const id= req.params.id;//saves the id received from the request
  const answersIndex= answers.findIndex (obj=> obj.id == id)//saves the index of the user id that equals to the id
  if (answersIndex == -1){//checking if question exists
    return res.status(440).send ("answer doesn't exist")//return a not found response
  }
 answers[answersIndex] = {...answers[answersIndex], ...req.body} //save the old user object and rewrite only the parameter received in the body
  fs.writeFileSync(requestPath, JSON.stringify (answers, null, 2)); //write the new parameter
  return res.send ('finished running'); //sends the response
});

//Delete
router.delete("/:id", (req, res) => {
  let answers= JSON.parse(fs.readFileSync(requestPath)); 
  const id= req.params.id;//saves the id received from the request
  const answersIndex= answers.findIndex (obj=> obj.id == id)//saves the index of the user id that equals to the id
  if (answersIndex == -1){//checking if user exists
    return res.status(440).send ("aswer doesn't exist")//return a not found response
  }
  users.splice(answersIndex, 1); //deleting from the array 1 user from the index
  fs.writeFileSync(requestPath, JSON.stringify (answers, null, 2)); //write the new parameter
  return res.send ('finished running'); //sends the response
});
module.exports = router;
