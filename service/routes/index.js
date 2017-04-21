var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});

    /*  return res.send({
     status: 1,
     info: '测试服务!!!'
     });*/
});

module.exports = router;
