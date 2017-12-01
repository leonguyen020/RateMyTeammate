var express = require('express');
var router = express.Router();
var UserAction = require('../action/Users');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//     var db = req.con;
//     var data = "";
//
//     db.query('SELECT * FROM user',function(err,rows){
//         // console.log('Data received from Db:\n');
//         console.log(rows);
//         var data = rows;
//
//         if(rows.length > 0){
//             data["Data"] = rows;
//             res.json(data);
//         }else{
//             data["Data"] = 'No data Found..';
//             res.json(data);
//         }
//     });
// });

router.get('/:id?',function(req,res,next){
    var id = req.params.id;
    if(id){
        UserAction.getUsersById(id,function(err,rows){
            if(err)
            {
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }
    else{
        UserAction.getAllUsers(function(err,rows){
            if(err)
            {
                res.json(err);
            }
            else
            {
                res.json(rows);
            }
        });
    }
});
router.post('/add',function(req,res,next){
    UserAction.addUsers(req.body,function(err,count){
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(req.body);//or return count for 1 &amp;amp;amp; 0
        }
    });
});
router.delete('/delete/:id',function(req,res,next){
    var id = req.params.id;
    UserAction.deleteUsers(id,function(err,count){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(count);
        }
    });
});
// router.put('/:id',function(req,res,next){
//     var id = req.params.id;
//     UserAction.updateUsers(id,req.body,function(err,rows){
//
//         if(err)
//         {
//             res.json(err);
//         }
//         else
//         {
//             res.json(rows);
//         }
//     });
// });

module.exports = router;
