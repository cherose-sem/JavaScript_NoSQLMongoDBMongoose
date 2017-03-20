
var express = require('express');
var router = express.Router();
var jokes = require("../model/jokes");


router.get('/api/jokes', (req, res, next)=> {
 jokes.allJokes((data)=>{
  res.send(JSON.stringify(data));
 })
});

router.get('/api/findjoke/:_id', (req, res, next)=> {
 jokes.findJoke(req.params.id,(data)=>{
  res.send(JSON.stringify(data));
 })
});

router.post('/api/joke', (req, res, next)=> {
 jokes.addJoke(req.body,(data)=>{
  res.send(JSON.stringify(data));
 })
});

router.put('/api/joke', (req, res, next)=> {
  var joketoBeUpdated = req.body;
 jokes.editJoke(joketoBeUpdated,(data)=>{
  res.send(JSON.stringify(data));
 })
});

router.delete('/api/joke/:id', (req, res, next)=> {
 jokes.deleteJoke(req.params.id,(data)=>{
  res.send(JSON.stringify(data));
 })
});

router.get('api/joke/random', (req, res, next)=> {
 jokes.randomJoke((data)=>{
  res.send(JSON.stringify(data));
 })
});


module.exports = router;