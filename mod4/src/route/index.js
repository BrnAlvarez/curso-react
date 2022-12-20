const userController = require('../controllers/userController')
const clientController = require('../controllers/clientController')
module.exports = (app) => {
    app.get('api', (req, res) => {
        res
        .status(200)
            .send({
                message:'Entregando API'
            });
    });
    app.get('/api/users', userController.getUsers)
    app.post('/api/user', userController.createUser)
    // app.get('/api/user/:id', userController.getUser)

    app.get('/api/clients', clientController.getClients)
    app.get('/api/client/:name', clientController.getClient)
    app.get('/api/client/:name/:lastname', clientController.getClient)
    app.get('/api/client/:name/:lastname/(:age)', clientController.getClient)
    app.post('/api/client', clientController.createClient)
    app.put('/api/client/:name', clientController.updateClient)
    app.delete('/api/client/:name', clientController.deleteClient)
}