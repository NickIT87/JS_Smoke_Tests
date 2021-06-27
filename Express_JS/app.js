const express = require('express')
const path = require('path')
const app = express()
const port = 3000


app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'))
})

app.all('*', (req, res) => {
    res.status(404).send('<h1>Error 404, resource not found!</h1>')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})