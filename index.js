const express = require('express');

const app = express();

const port = 8001;

//use express router
app.use('/',require('./routes'));

app.listen(port,function(err){
    if(err){
        //interpolition method
        console.log(`Error running server : ${err}`);
    }
    console.log(`Running successfully on port : ${port}`);
});