const express = require('express')
const path = require('path')
const http = require('http');

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/static", express.static(path.resolve(__dirname, 'frontend', 'static')))

app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'index.html'))
})

const server = http.createServer(app)

function startServer() {
    server.listen(PORT, () => {
        console.log(`Listening on ${PORT}`)
    })
}

startServer()