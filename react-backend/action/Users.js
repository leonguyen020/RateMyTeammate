var db=require('../dbconnection'); //reference of dbconnection.js
var Users={
    getAllUsers:function(callback){
        return db.query("Select * from user",callback);
    },
    getUsersById:function(id,callback){
        return db.query("select * from user where id=?",[id],callback);
    },
    addUsers:function(Task,callback){
        return db.query("Insert into user values(?,?,?)",[Task.Id,Task.Title,Task.Status],callback);
    },
    deleteUser:function(id,callback){
        return db.query("delete from user where id=?",[id],callback);
    }
    ,updateUsers:function(id,user,callback){
        return db.query("update user set username=?,password=?,email=?,level=? where id=?",[user.username,user.password,,user.email,,user.level,id],callback);
    }

};
module.exports=Users;