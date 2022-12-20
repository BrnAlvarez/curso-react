


module.exports = {
    getUsers (req, res) {
        const DATABASE = req.app.get('DATABASE')
        // eq.params.id
        return DATABASE.collection('user').find({}).toArray((err, result) => {
                    if(err)
                        res.status(200).send({message:"Error"})
                    else
                        res.status(200).send({message:"Success",data:result})
                })
        // return res.status(200).send({name:"Brian Server",lastname:"Alvarez Servidor ",age:30,message:"consultando usuarios"})
    },
    getUser(req, res){
        // res.status(200).send(req.params)
        const DATABASE = req.app.get('DATABASE')
        const core = req.params
        return DATABASE.collection('user').find(core).toArray((err, result) => {
            if(err)
                res.status(200).send({message:"Error"})
            else
                res.status(200).send({message:"Success",data:result})
        })
    },
    createUser (req, res) {
        const DATABASE = req.app.get('DATABASE')
        // return res.status(200).send(req.body)
        const core = req.body
        if((typeof core.name === undefined || core.lastname === undefined || core.age === undefined))
            return res.status(200).send({message:"Faltan datos"})
        if(trim(core.name) === "" || trim(core.lastname) === "" || trim(core.age) === "")
            return res.status(200).send({message:"Faltan datos"})
        const mydata = {
            name : core.name,
            lastname : core.lastname,
            age : core.age
        }
        return DATABASE.collection('user').insertOne(mydata, (err, result) => {
            if(err)
                res.status(200).send({message:"Error Insert"})
            else
                res.status(200).send({message:"Success",data:"Se realiza insert con id "+ result.insertedId})
        })
    },
    updateUser (req, res) {
        const DATABASE = req.app.get('DATABASE')

        // return res.status(200).send({message:"Actualizando usuarios"})
    },
    deleteUser (req, res) {
        const DATABASE = req.app.get('DATABASE')
        return res.status(200).send({message:"Eliminando usuarios"})
    },



}