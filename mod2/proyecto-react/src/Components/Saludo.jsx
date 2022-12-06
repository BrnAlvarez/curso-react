

const Saludo = (props) => {
    const {nombres, apellidos}  = props
    return (
        <p>Hola {nombres} {apellidos}</p>
    )
}

export default Saludo