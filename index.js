// var app = require('express')();
// var http = require('http').createServer(app);
// var io = require('socket.io')(http);

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });
// io.on('connection', (socket) => {
//   socket.on('message', (msg) => {
//     console.log('message:-'+ msg);
//     io.emit('message', msg);
//   });
//   });
// http.listen(3000, () => {
//   console.log('listening on *:3000');
// });

var app = require('express')();
var http = require('http').createServer(app)
var io = require('socket.io')(http);
app.get('/',  (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('message', (msg) => {
        console.log('chat message received', msg)
        io.emit('message', msg);
    })
    socket.on('disconnect', (e) => {
        console.log('user disconnected' + e);
    });
});
const port = process.env.PORT || 3000;
http.listen(port, (err) => {
   if (err) {
      console.log('error123');
   }
   else {
      console.log("listening at :" + port);
   }
})