var express = require('express');
var router = express.Router();
const { json } = require('express');
var fs = require('fs'); //importing the file system
var path = require('path');//importing path from path, used with the command normalize
//variables 
const requestPath= path.normalize('../back-end/DataBase/users.json');

//Creating a CRUD function

/* GET users listing. */
router.get('/', function(req, res, next) {
  let user= JSON.parse(fs.readFileSync(requestPath)); //saves into users variable what will be read from Json file
  res.send(user); //sends the response
});
//Get for a specific user
router.get('/:id', function (req, res, next){
  let users= JSON.parse(fs.readFileSync(requestPath)); 
  const id= req.params.id;//saves the id received from the request
  const userIndex= users.findIndex (obj=> obj.id == id)//saves the index of the user id that equals to the id
  if (userIndex == -1){//checking if user exists
    return res.status(440).send ("Id doesn't exist")//return a not found response
  }
  return res.send(users[userIndex]);//return the user (so the object inside the array)
});

//Get for an email
router.get('/byEmail/:email', function (req, res, next){
  let users= JSON.parse(fs.readFileSync(requestPath)); 
  const email= req.params.email;//saves the id received from the request
  const userIndex= users.findIndex (obj=> obj.email == email)//saves the index of the user id that equals to the id
  if (userIndex == -1){//checking if user exists
    return res.status(440).send ("email doesn't exist")//return a not found response
  }
  return res.send(users[userIndex]);//return the user (so the object inside the array)
});

// Post
router.post("/", (req, res) => {
    let data= JSON.parse(fs.readFileSync(requestPath));
    // const id= data.length+1;
    //req body is what we get with the post request
    data.push({id: data.length +1, ...req.body});//adding a new user inside the data variable
    fs.writeFileSync(requestPath,JSON.stringify(data, null, 2));//rewriting the json users adding a new user to what was already
  res.send(data[data.length -1]);//sending a response
});

//Put - to update
router.put("/:id", (req, res) => {
  let users= JSON.parse(fs.readFileSync(requestPath)); 
  const id= req.params.id;//saves the id received from the request
  const userIndex= users.findIndex (obj=> obj.id == id)//saves the index of the user id that equals to the id
  if (userIndex == -1){//checking if user exists
    return res.status(440).send ("Id doesn't exist")//return a not found response
  }
  users[userIndex] = {...users[userIndex], ...req.body} //save the old user object and rewrite only the parameter received in the body
  fs.writeFileSync(requestPath, JSON.stringify (users, null, 2)); //write the new parameter
  return res.send ('finished running'); //sends the response
});

//Delete
router.delete("/:id", (req, res) => {
  let users= JSON.parse(fs.readFileSync(requestPath)); 
  const id= req.params.id;//saves the id received from the request
  const userIndex= users.findIndex (obj=> obj.id == id)//saves the index of the user id that equals to the id
  if (userIndex == -1){//checking if user exists
    return res.status(440).send ("Id doesn't exist")//return a not found response
  }
  users.splice(userIndex, 1); //deleting from the array 1 user from the index
  fs.writeFileSync(requestPath, JSON.stringify (users, null, 2)); //write the new parameter
  return res.send ('finished running'); //sends the response
});



module.exports = router;

