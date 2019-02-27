var User = require('../models/user.js');


exports.postUser = function(req,res){
   
    var user = new User({
        username: req.body.username,
        password: req.body.password
    });

    user.save(function(err){
        if(err) return res.send(err);

        res.json({message: 'User Saved'});
    });

};



exports.getUsers = function(req,res){
    User.find(function(err, users){
        if(err) return  req.send(err);
        
        res.json(users);
    });
};


