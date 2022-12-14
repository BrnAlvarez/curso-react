import {Button,AppBar, Toolbar, Typography} from '@mui/material'
import {Link} from 'react-router-dom'
import './Navigator.css'
const Navigator = () => {
    return (
        <div>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='h6' component="div" sx={{flexGrow: 1}}>
                        App
                    </Typography>
                    <Link to="/">
                        <Button variant="contained">Principal</Button>
                    </Link> 
                    <Link to="/home">
                        <Button variant="contained">Home</Button>
                    </Link> 
                    <Link to="/about">
                        <Button variant="contained">About</Button>
                    </Link>
                    <Link to="/information">
                        <Button variant="contained">Information</Button>
                    </Link> 
                    <Link to="/login">
                        <Button variant="contained">Login</Button>
                    </Link> 
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default Navigator