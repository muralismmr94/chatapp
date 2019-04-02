/***************************************************************************
 * Execution : 1.default node     cmd>node server.js
 *             2.if nodemon installed  cmd>nodemon server.js
 * purpose  : chatting two peoples
 * @description
 * @file    : server.js
 * @overview :In this module contains the sending and receiving messages.
 * @author  : Murali s <muralismmr94@gmail.com>
 * @version :1.0
 * 
 ***************************************************************************/
const http = require('http');

// to include all modules or all files
//which allows us to support http protocol and socket.IO
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
/*body-parser parses your request and converts it into a 
format from which you can easily extract relevant information that you may need.*/
const bodyParser = require('body-parser');

/*Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
and exposes the resulting object (containing the keys and values) on req.body.*/
app.use(bodyParser.urlencoded({ extended: true }));

// Parses the text as JSON and exposes the resulting object on req.body.
app.use(bodyParser.json());
var expressValidator = require('express-validator')
 app.use(expressValidator());
//importing socketIO to get connection between client and server.
var chatController = require('./controllers/chatController');

const mongoose = require('mongoose');
const route = require('../server/routes/route');
const  port =4000;
var server = app.listen(port, () => {
    console.log("Server is listening to port "+port);
})
const io = require('socket.io')(server);
  // console.log("socket is connected");
//checking for events connection will be listening  for incoming sockets.
io.on('connection',function(socket){
    console.log("socket connection on");
    //started listening events  and socket.on wait for the event.whenever that event is triggered to callback
    //function is called
    socket.on('createMessage',function(message){
        //saving message to database
        chatController.message(message,(err,data)=>{
            if(err){
                console.log("Error on message");
                console.log(err);
            }else {
                console.log(message+ "in server");
                //io.emmit is used to emit the message to all sockets connected to it.
                io.emit('newMessageSingle',message);
            }
        })
        //socket emit disconnect event which will be called whenever client disconnect
        socket.on('disconnect',function(){
            console.log("socket connection off")
        });
    });
});

// calling router
app.use('/', route); 

app.use(express.static('../client'));
mongoose.Promise=global.Promise;

const dbConfig = require('./config/configurl');

//connection to the mongo database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("successfully connected to database at port"+port);
}).catch(err => {
    console.log("Unsucess to connected to database at port"+port);
    process.exit();
}); 
