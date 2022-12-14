
import Navigator from './Navigator'
import {useSelector} from 'react-redux'


const About = () => {

    // const nameUser = useSelector((state) => state.user_logged)
    // const information = useSelector((state) => state.information)
    const {user_logged: nameUser, information}  = useSelector((state) => state)
    //->
    return (
        <div>
            <Navigator />
            About
            {nameUser}<br />{information}
        </div>
    )
}
export default About