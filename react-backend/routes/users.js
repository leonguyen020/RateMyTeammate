var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    var db = req.con;
    var data = "";

    db.query('SELECT * FROM user',function(err,rows){
        // console.log('Data received from Db:\n');
        console.log(rows);
        var data = rows;
        if(rows.length != 0){
            data["Data"] = rows;
            res.json(data);
        }else{
            data["Data"] = 'No data Found..';
            res.json(data);
        }
    });
  // res.send('respond with a resource');
  //   res.json([{
  //     id:1,
  //     username: "Developer"
  //   },{
  //     id:2,
  //     username: "Client"
  //   }]);
});

module.exports = router;
