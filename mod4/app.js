//Servidor interno
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const MongoClient = require ('mongodb').MongoClient
const URI = 'mongodb://127.0.0.1:27017';

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())
require('./src/route')(app)

// app.get('/api/clients', (req, res) => {
//     //{name:"Brian"}
//     database.collection('client').find({}).toArray((err, result) => {
//         if(err)
//             res.status(200).send({message:"Hubo Error"})
//         else
//             res.status(200).send(result)
//     })
// })
// app.get('*', (req, res) => {
//     res.status(200)
//     .send({
//         message:'API Works!!...V1'
//     })
// })



//  app.listen(3001, async () => {
//     const URI = 'mongodb://127.0.0.1:27017';
//     const client = new MongoClient(URI);

//     try {
//         await client.connect();
//         database = client.db("react")
//         console.log('AJALE');

//     } catch (e) {
//         console.error(e);
//     }
// });

//localhost:3001 method 2 me

// var database 
// MongoClient.connect(URI,  (err, db) => {
//     if(db == null)
//         return res.status(200).send({message:"Hubo Error MongoDb"});
//         database = db.db("react")
//     })



app.listen(3001, () => {
    new MongoClient(URI)
    .connect()
    .then((client) => {
        // database = client.db("react")  
        app.set('DATABASE',client.db("react"))
        console.log({message:"Conectado a la Bd"})
    })
    .catch((error) => {
        console.log({message:"Hubo Error MongoDb"+error});
    })
})