
import Component from 'react'
const Saludo = (props) => {
    const {nombres, apellidos}  = props
    return (
        <p>{nombres} {apellidos}</p>
    )
}

export default Saludo