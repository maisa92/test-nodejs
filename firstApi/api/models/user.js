var mongoose = require('mongoose');
var bcryprt = require('bcrypt');




var UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },

    password: {
        type: String,
        required: true
    }
});


UserSchema.pre('save', function(callback){
    var user = this;

    if(!user.isModified('password')) return callback();

    bcryprt.genSalt(5,function(err,salt){
        if(err) return callback(err);

        bcryprt.hash(user.password, null,salt, function(err,hash){
            if(err) return callback(err);

            user.password = hash;

            callback();
        });

    });

});

UserSchema.methods.verifyPassword = function(password, callback){
    bcryprt.compare(password, this.password, function(err,isMatch){
            if(err) return callback(err);

            cb(null, isMatch);
    });
};


module.exports = mongoose.model('User',UserSchema);