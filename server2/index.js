require('dotenv').config();

const express = require('express');
const router = require('./routes/index')
const sequelize = require('./db');
const cors = require('cors');
const path = require('path');

const fileUpload = require('express-fileupload');

const app = express();

app.use(cors({origin: '*'}))
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));

app.use('/api', router);

const http = require('http').createServer(app);
const {Server} = require('socket.io');

const io = new Server(http, {
    cors: {
        origin: 'http://localhost:3000',
        credentials: true
    },
});

io.on('connect', (socket) => {
    console.log('connected');
    socket.on('chat message', (data) => {
        console.log(data);

        // data = {
        //     chatId,
        //     userId,
        //     date,
        //     content
        // }


        io.emit('chat message', {
            date: data.date,
            content: data.content
        })
    })
})

const start = async () => {
    try{
        await sequelize.authenticate();
        await sequelize.sync();
        http.listen(process.env.PORT, () => {
            console.log(`server is running on port ${process.env.PORT}`);
        })
    } catch (e) {
        console.log(e);
    }
}

start();
