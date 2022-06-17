module.exports.profile = function(req,res){
    // res.end('<h1>User profile</h1>');

    return res.render('profile',{
        title:"Home"
    });

};

//rendering sign up page
module.exports.signUp = function(req,res){
    return res.render('user_signup',{
        title: "Codeial | Sign Up"
    });
};

//rendering login page
module.exports.login = function(req,res){
    return res.render('user_login',{
        title: "Codeial | Login"
    });
};

//sign up data
module.exports.create = function(req,res){
    //TODO later
};

//get login data session creation
module.exports.createSession = function(req,res){
    //TODO later
};