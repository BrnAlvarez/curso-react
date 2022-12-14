import {Button} from '@mui/material'
import {Link} from 'react-router-dom'
const NotFound = () => {
    return (
        <div>
            <h2>upss!!... Algo salió mal.</h2>
            <Link to="/">
                <Button variant="contained">Principal</Button>
            </Link> 
        </div>
    )
}

export default NotFound