
import Navigator from './Navigator'
import { useEffect } from 'react'
import {useDispatch } from 'react-redux'
import { setSaveInformation } from '../redux/actions'

    

const Login = () => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        //uso de las configuraciones de redux, depues de los realizado en index.js
        dispatch(setSaveInformation("Presionamos login"))
// eslint-disable-next-line
    }, [])

    return (
        <div>
            <Navigator />
            Login
        </div>
    )
}

export default Login