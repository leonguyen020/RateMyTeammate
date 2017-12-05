var express = require('express');
var router = express.Router();
var UserAction = require('../action/users');

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

// Get users either all or by ID
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
// Add new user
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
// Delete user
router.delete('/delete/:id',function(req,res,next){
    var id = req.params.id;
    UserAction.deleteUser(id,function(err,count){
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
// Update user
router.put('/edit/:id',function(req,res,next){
    var id = req.params.id;
    var data = [
        username = req.body.username,
        password = req.body.password,
        email = req.body.email,
        level = req.body.level
    ];
    UserAction.updateUsers(id,data,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            // res.send(JSON.stringify(rows));
            res.json(rows);
            // res.end(JSON.stringify(results));
        }
    });
});

module.exports = router;
