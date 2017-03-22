let express = require('express');
let router = express.Router();
let mongoose = require("mongoose");
let Joke = mongoose.model("Joke");


router.get('/jokes', (req, res, next) => {
  Joke.find({}, function (err, data) {
    if (err) throw err;
    res.send(data);
  });
});

router.get('/jokes/:id', (req, res, next) => {
  let id = req.params.id;
  Joke.findById({ _id: id }, function (err, data) {
    if (err) throw err;
    let jsonStr = JSON.stringify(data);
    // console.log(jsonStr)
    res.send(jsonStr);
  })
});

router.post('/jokes', (req, res, next) => {
  let newJoke = req.body;
  Joke.create(newJoke, function (err, data) {
    if (err) throw err;
    res.send(data);
  });

});

router.put('/jokes/:id', (req, res, next) => {
  let id = req.params.id
  let jokeToBeEdited = req.body;
  Joke.findById({ _id: id }, function (err, joke) {
    if (err) throw err;
    joke.joke = jokeToBeEdited.joke;
    joke.save(function (err, data) {
      if (err) throw err;
      res.send(data);
    });
  })
});

router.delete('/jokes/:id', (req, res, next) => {
  let id = req.params.id;
  Joke.findByIdAndRemove({ _id: id }, function (err, data) {
    if (err) throw err;
    // console.log(JSON.stringify(data));
    res.statusCode = 204;
    res.send();
  });

});


module.exports = router;