const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("Hola 1");
})
app.get('/welcome', (req, res) => {
    res.send("Welcome");
})

app.listen(port,() => {
    console.log("hola2");
})