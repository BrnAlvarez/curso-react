


module.exports = {
  
    getClients (req, res) {
        const DATABASE = req.app.get('DATABASE')
        // eq.params.id
        return DATABASE.collection('client').find({}).toArray((err, result) => {
                    if(err)
                        res.status(500).send({message:"Error",data:err})
                    else
                        res.status(200).send({message:"Success",data:result})
                })
        // return res.status(200).send({name:"Brian Server",lastname:"Alvarez Servidor ",age:30,message:"consultando usuarios"})
    },
    getClient(req, res){
        // res.status(200).send(req.params)
        const DATABASE = req.app.get('DATABASE')
        const core = req.params //{name:"Ejemplo"}
        return DATABASE.collection('client').find(core).toArray((err, result) => {
            if(err)
                res.status(500).send({message:"Error",data:err})
            else
                res.status(200).send({message:"Success",data:result})
        })
    },
    createClient (req, res) {
        // return res.status(200).send(req.body)
        const DATABASE = req.app.get('DATABASE')
        const core = req.body
        if((typeof core.name === undefined || core.lastname === undefined || core.age === undefined))
            return res.status(500).send({message:"Error",data:"Faltan datos"})
        // if(trim(core.name) === "" || trim(core.lastname) === "" || trim(core.age) === "")
        //     return res.status(200).send({message:"Error",data:"Faltan datos"})
        const mydata = {
            name : core.name,
            lastname : core.lastname,
            age : core.age
        }
        return DATABASE.collection('client').insertOne(mydata, (err, result) => {
            if(err)
                res.status(500).send({message:"Error",data:"Hubo Error Insert"})
            else
                res.status(201).send({message:"Success",data:"Se realiza insert con id "+ result.insertedId})
        })
    },
    updateClient(req, res) {
        // return res.status(200).send(req.body)
        const DATABASE = req.app.get('DATABASE')
        const prevQuery = req.params
        const core = req.body
        
        if((typeof core.name === "undefined"))
            return res.status(500).send({message:"Error",data:"Faltan datos"})
        const query = {
            name : prevQuery.name
        }
        const dataset = {
            $set: {
                name : core.name,
                lastname : core.lastname,
                age : core.age
            }
        }
        return DATABASE.collection('client').updateOne(query, dataset, (err, result) => {
            if(err)
                res.status(500).send({message:"Error",data:"Hubo Error Update"})
            else
                res.status(201).send({message:"Success",data:"Se realiza Update "+ JSON.stringify(result)})
        })
    },
    deleteClient (req, res) {
        // return res.status(200).send(req.body)
        const DATABASE = req.app.get('DATABASE')
        const prevQuery = req.params
        const core = req.body
        
        if((typeof core.name === "undefined"))
            return res.status(500).send({message:"Error",data:"Faltan datos"})
        const query = {
            name : prevQuery.name
        }
        const dataset = {
            $set: {
                name : core.name,
                lastname : core.lastname,
                age : core.age
            }
        }
        return DATABASE.collection('client').deleteOne(query, dataset, (err, result) => {
            if(err)
                res.status(500).send({message:"Error",data:"Hubo Error Update"})
            else
                res.status(201).send({message:"Success",data:"Se realiza eliminación "+ JSON.stringify(result)})
        })
    },






}