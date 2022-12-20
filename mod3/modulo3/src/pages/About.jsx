
import Navigator from './Navigator'
import {useSelector} from 'react-redux'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setSaveUserDataCreate } from '../redux/actions'
import { TextField, Button, Card, CardContent  } from '@mui/material'

const About = () => {
    const [userData, setUserData ] = useState({})
    const [nombre, setNombre ] = useState('')
    const [apellido, setApellido ] = useState('')
    const [edad, setEdad ] = useState(0)
    const dispatch = useDispatch()

    
    useEffect(() => {
        fetch("http://localhost:3001/api/users")
        .then(res => res.json())
        .then(res => {
            setUserData(res)
            dispatch(setSaveUserDataCreate(res))
        })
        
        
    // eslint-disable-next-line
    }, [])
    // const nameUser = useSelector((state) => state.user_logged)
    // const information = useSelector((state) => state.information)
    const {user_logged: nameUser, information}  = useSelector((state) => state)

    const {name, lastname, age, message}  = useSelector((state) => state.data)
    //->



    const sendData = () => {
        console.log("Nombre: "+nombre);
        console.log("Apellido: "+apellido);
        console.log("Edad: "+edad);
        const req = {name:nombre,lastname:apellido,age:edad,message:"Usuario creado"}
        fetch("http://localhost:3001/api/user",
            {
                method:'post',
                body:JSON.stringify(req),
                headers:{"Content-type":"application/json"}
            }
        )
        .then(res => res.json())
        .then(data => {
            setUserData(data)
            dispatch(setSaveUserDataCreate(data))
        })
        .catch(error => console.log(error))
        
    }    

    return (
        <div>
            <Navigator />
            About <br />
            <Card sx={{ minWidth: 275, maxWidth:600 }}>
                <CardContent>
                    <strong>Redux:</strong> {nameUser} {information}<br />
                    
                    <strong>Imprimiendo useState: </strong>
                    {JSON.stringify(userData)}<br />

                    
                    <strong>Usando redux (Data desde el servidor): </strong> 
                    {name} {lastname} {age}<br />
                </CardContent>
            </Card>
      
            <br />
            <br />
            <br />

            <form action="http://localhost:3001/api/user" method="post">
            <TextField
                id="nombre"
                label="Nombre"
                defaultValue={name}
                onChange ={(event) => {
                    event.preventDefault()
                    setNombre(event.target.value)
                }}
                />
            <TextField
                id="apellido"
                label="Apellido"
                defaultValue={lastname}
                onChange ={(event) => {
                    event.preventDefault()
                    setApellido(event.target.value)
                }}
                />
            <TextField
                id="edad"
                label="Edad"
                defaultValue={age}
                onChange ={(event) => {
                    event.preventDefault()
                    setEdad(event.target.value)
                }}
                />
                <br />
                {message}
                <br />
                <Button variant="outlined" onClick={sendData}>
                    Envía
                    </Button>
            </form>

        </div>
    )
}
export default About