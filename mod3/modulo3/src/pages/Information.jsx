import { useEffect } from 'react'
import Navigator from './Navigator'
import { useDispatch } from 'react-redux'
import { setSaveInformation } from '../redux/actions'
const Information = () => {

    const dispatch = useDispatch()
    
    useEffect(() => {
        //uso de las configuraciones de redux, depues de los realizado en index.js
        dispatch(setSaveInformation("Realizando modulo 3"))
// eslint-disable-next-line
    }, [])


    return (
        <div>
            <Navigator />
            Seteando informacion
        </div>
    )
}

export default Information