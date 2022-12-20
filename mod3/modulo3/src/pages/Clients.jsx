
import Navigator from './Navigator'
import {useSelector} from 'react-redux'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setSaveClientDataCreate } from '../redux/actions'
import { TextField, Button, Card, CardContent  } from '@mui/material'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import DeleteIcon from '@mui/icons-material/Delete'
import UpdateIcon from '@mui/icons-material/Update'

import SearchIcon from '@mui/icons-material/Search'

const Clients = () => {
    const [clientData, setClientData ] = useState([])
    const [result, setResult ] = useState([])
    const [nombre, setNombre ] = useState('')
    const [apellido, setApellido ] = useState('')
    const [edad, setEdad ] = useState(0)
    const dispatch = useDispatch()

    
    useEffect(() => {
        fetch("http://localhost:3001/api/clients")
        .then(res => res.json())
        .then(res => {
            setClientData(res.data)
            dispatch(setSaveClientDataCreate(res.data))
        })
        
        
    // eslint-disable-next-line
    }, [result])

    // const {dataClient: nameClient  }  = useSelector((state) => state)

    const {name, lastname, age, message}  = useSelector((state) => state.data)

    const sendData = () => {
        const req = {name:nombre,lastname:apellido,age:edad,message:"Cliente creado"}
        fetch("http://localhost:3001/api/client",
            {
                method:'post',
                body:JSON.stringify(req),
                headers:{"Content-type":"application/json"}
            }
        )
        .then(res => res.json())
        .then(data => {
            setResult(data)
            dispatch(setSaveClientDataCreate(data))
            setNombre('')
            setApellido('')
            setEdad('0')
        })
        .catch(error => console.log(error))
        
    }  
    const actualizarCliente = () => {
        // const req = {name:nombre,lastname:apellido,age:edad,message:"Cliente creado"}
        // fetch("http://localhost:3001/api/client",
        //     {
        //         method:'post',
        //         body:JSON.stringify(req),
        //         headers:{"Content-type":"application/json"}
        //     }
        // )
        // .then(res => res.json())
        // .then(data => {
        //     setResult(data)
        //     dispatch(setSaveClientDataCreate(data))
        // })
        // .catch(error => console.log(error))
        
    }   

    const eliminarCliente = (event,namee) => {
        const req = {name:nombre,lastname:apellido,age:edad,message:"Cliente creado"}
        fetch("http://localhost:3001/api/client/"+namee,
            {
                method:'delete',
                body:JSON.stringify(req),
                headers:{"Content-type":"application/json"}
            }
        )
        .then(res => res.json())
        .then(data => {
            setResult(data)
            dispatch(setSaveClientDataCreate(data))
        })
        .catch(error => console.log(error))
        
    }   


    return (
        <div>
            <Navigator />
            <br />
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Card>
                            <CardContent>
                                {/* <strong>Redux:</strong> {nameClient}<br /> */}
                                
                                <strong>Clientes </strong>
                                
                                {/* {JSON.stringify(clientData.data)} */}
                                <table>
                                <thead>
                                    <tr>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>Edad</th>    
                                    <th>Acción</th>    
                                    </tr>
                                </thead>    
                                <tbody>
                                {clientData.map((clientw,index) => (
                                    <tr key={index}>
                                        <td>{clientw.name}</td>
                                        <td>{clientw.lastname}</td>
                                        <td>{clientw.age}</td>
                                        <td><UpdateIcon onClick={actualizarCliente}/> <DeleteIcon onClick={(event)=>eliminarCliente(event,''+clientw.name+'')}/> </td>
                                    </tr>
                                
                                ))}
                                
                                </tbody></table>
                                <br />

                                
                                <strong>Usando redux (Data desde el servidor): </strong> 
                                {name} {lastname} {age}<br />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card>
                            <CardContent>
                            <form action="http://localhost:3001/api/client" method="post">
                                <TextField
                                    id="nombre"
                                    label="Nombre"
                                    defaultValue={nombre}
                                    // onChange ={(event) => {
                                    //     event.preventDefault()
                                    //     setNombre(event.target.value)
                                    // }}
                                    />
                                <TextField
                                    id="apellido"
                                    label="Apellido"
                                    defaultValue={apellido}
                                    // onChange ={(event) => {
                                    //     event.preventDefault()
                                    //     setApellido(event.target.value)
                                    // }}
                                    />
                                <TextField
                                    id="edad"
                                    label="Edad"
                                    defaultValue={edad}
                                    // onChange ={(event) => {
                                    //     event.preventDefault()
                                    //     setEdad(event.target.value)
                                    // }}
                                    />
                                    <br />
                                    {message}
                                    <br />
                                    <Button variant="outlined" onClick={sendData}>
                                        Envía
                                        </Button>
                                </form>
                            </CardContent>
                        </Card>  
                    </Grid>
                </Grid>          
            </Box>

            

        </div>
    )
}
export default Clients