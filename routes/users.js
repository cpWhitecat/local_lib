var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/cool',(req,res,next)=>{
  res.render('users/cool',{   // 以/来区分文件和文件夹
    title:'Express'
  })
  // res.send('you are right');
})
module.exports = router;