const express = require('express')
const path = require('path')
const cors = require('cors')

app = express()

const PORT = 3000

app.use(cors())

app.get('/plans', (req, res) => {
    res.sendFile(path.join(__dirname, 'plans.json'))
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})