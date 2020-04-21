const express = require('express')
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const socketio = require('socket.io');
const http = require('http')

const routes = require( './routes')

const app = express();
const server = http.Server(app);
const io = socketio(server);

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack9-ub5tj.gcp.mongodb.net/instadev?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use((req, res, next)=>{
    req.io = io;
    return next();
})

app.use(cors());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')))
app.use(express.json());
app.use(routes);
server.listen(3333)