const {createServer} = require('http'); //nueva forma de importar

const hostname = 'localhost'
const port = 3000

const server = createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('<strong>Hola Servidor Brian 2</strong>')  
})

server.listen(port, hostname, () =>{
    console.log(`Servidor corriendo en http://${hostname}:${port}`);
})
