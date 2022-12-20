import { useEffect } from 'react'
import Navigator from './Navigator'
import { useDispatch } from 'react-redux'
import { setSaveUserLogged } from '../redux/actions'
const Home = () => {

    const dispatch = useDispatch()
    
    useEffect(() => {
        //uso de las configuraciones de redux, depues de los realizado en index.js
        dispatch(setSaveUserLogged("Brian"))
// eslint-disable-next-line
    }, [])


    return (
        <div>
            <Navigator />
            Home
            Hola 
        </div>
    )
}

export default Home