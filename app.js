//App.js
const express = require('express');
const app = express();
const server = require('http').Server(app);

//Socket.io
const io = require('socket.io')(server);
io.on("connection", (socket) => {
  console.log("🔌 New user connected! 🔌");
})

const exphbs  = require('express-handlebars');
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.render('index.handlebars');
})

server.listen('3000', () => {
  console.log('Server listening on Port 3000');
})

//Socket.io has to use the http server
const server = require('http').Server(app);

//Express View Engine for Handlebars
const exphbs  = require('express-handlebars');
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.render('index.handlebars');
})

server.listen('3000', () => {
  console.log('Server listening on Port 3000');
})

//Establish your public folder
app.use('/public', express.static('public'))


// const io = require('socket.io')(server);
// //We'll store our online users here
// let onlineUsers = {};
// io.on("connection", (socket) => {
//   // Make sure to send the users to our chat file
//   require('./sockets/chat.js')(io, socket, onlineUsers);
})

const io = require('socket.io')(server);
let onlineUsers = {};
//Save the channels in this object.
let channels = {"General" : []}

io.on("connection", (socket) => {
  // Make sure to send the channels to our chat file
  require('./sockets/chat.js')(io, socket, onlineUsers, channels);
})

