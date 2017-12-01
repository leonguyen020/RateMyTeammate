var db=require('../dbconnection'); //reference of dbconnection.js
var Users={
    getAllUsers:function(callback){
        return db.query("Select * from user where level = 1",callback);
    },
    getUsersById:function(id,callback){
        return db.query("select * from user where id=?",[id],callback);
    },
    addUsers:function(Task,callback){
        return db.query("Insert into user values(?,?,?)",[Task.Id,Task.Title,Task.Status],callback);
    },
    deleteUsers:function(id,callback){
        return db.query("delete from user where Id=?",[id],callback);
    }
    // ,updateUsers:function(id,Task,callback){
    //     return db.query("update user set Title=?,Status=? where Id=?",[Task.Title,Task.Status,id],callback);
    // }

};
module.exports=Users;