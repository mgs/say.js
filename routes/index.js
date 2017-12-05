var express = require('express');
var router = express.Router();
var child_process = require('child_process');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Halexa' });
});

router.get('/*', function(req, res, next) {
  let t = "Hello, human. Its me Hal-exa.";
  console.log(req);
  res.render('index', { title: t});
  say(req.url);
});

function say(string){
  child_process.exec('say ' + string);
}

module.exports = router;
