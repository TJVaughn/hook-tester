require('dotenv').config()
require('./server/src/db')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const api = require('./server/src/routes/hook/api')
const http = require('http') 
const Hook = require('./server/src/models/Hook')
const server = http.createServer(app)
const io = require('socket.io')(server, {
    path: '/socket'
})

app.use(express.json())

//CRD for endpoints
app.post('/hook', api.create)

app.get('/hook', api.read)

app.delete('/hook/:id', api.delete)

//web socket connection
let socket = io.on('connection', (socket) => {
    socket.emit('message', '1')
})

//webhook endpoint
app.post('/hook/:id', async (req, res) => {
    try {
        const ID = req.params.id
        const hook = await Hook.findById(ID)
        if(!hook){
            return res.sendStatus(404)
        }
        hook.data.unshift(req.body.data)
        await hook.save()
        socket.emit('message', `1`)
        return res.sendStatus(200)
    } catch (error) {
        res.send({error: `error in call hook: ${error}`})
    }
})



server.listen(PORT, () => {
    console.log(`Server is listening on Port:  ${PORT}`);
})