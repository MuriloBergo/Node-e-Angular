var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 // res.render('index', { title: 'Express' });

  req.app.locals.collection().find().toArray((error,result)=>{
      if(error){
          res.send("Cannot get lanes");
          console.log(error);
      }
      res.send(result);
  });
});

module.exports = router;
