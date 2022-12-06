import { useState } from "react"

const Input = () => {
    const [fullname, setFullname] = useState('') //aqui debe ser con corchetes

    const cambiaValorInput = (event) => {
        event.preventDefault()
        setFullname(event.target.value)
    }
    
    return (
        <div>
            <label >Fullname: </label>
            <input type="text"  name="fullname" value={fullname} onChange={cambiaValorInput}/>
            <br />Es: {fullname}
        </div>
    )
}


export default Input