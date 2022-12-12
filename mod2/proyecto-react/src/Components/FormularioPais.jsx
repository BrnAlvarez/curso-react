import { useEffect, useState } from "react"
import Select from "./Select"
const FormularioPais = () => {
    const dataPaises = [
        {"id": 1,"name":"Chile"},
        {"id": 2,"name":"Brazil"},
        {"id": 3,"name":"Argentina"},
        {"id": 4,"name":"Peru"},
        {"id": 5,"name":"Bolivia"},
    ]
    const dataDepartamentos = [
        {"idPais": 1,"id": 1,"name":"Maule"},
        {"idPais": 1,"id": 2,"name":"Ñuble"},
        {"idPais": 1,"id": 3,"name":"Biobio"},
        {"idPais": 1,"id": 4,"name":"Materopolitana"},
        {"idPais": 2,"id": 1,"name":"Rio de Janeiro"},
        {"idPais": 3,"id": 1,"name":"Buenos Aires"},
        {"idPais": 4,"id": 1,"name":"Cuzco"},
        {"idPais": 5,"id": 1,"name":"La Paz"},
    ]
    const dataProvincias = [
        {"idPais": 1,"idDepartamento": 1,"id":1,"name":"Talca"},
        {"idPais": 1,"idDepartamento": 2,"id":2,"name":"Chillan"},
        {"idPais": 1,"idDepartamento": 3,"id":3,"name":"Concepción"},
        {"idPais": 1,"idDepartamento": 4,"id":4,"name":"Santiago"},
        {"idPais": 2,"idDepartamento": 1,"id":5,"name":"Rio de Janeiro 2"},
        {"idPais": 3,"idDepartamento": 1,"id":6,"name":"Buenos Aires 2"},
        {"idPais": 4,"idDepartamento": 1,"id":7,"name":"Cuzco 2"},
        {"idPais": 5,"idDepartamento": 1,"id":8,"name":"La paz 2"},
    ]
    const [paises,setPaises]  = useState([])
    const [departamentos,setDepartamentos]  = useState([])
    const [provincias,setProvincia]  = useState([])
    const [selectpais,setSelectpais] = useState('')
    const [selectdepartamento,setSelectdepartamento] = useState('')
    const [selectprovincia,setSelectprovincia] = useState('')

    useEffect(() => {
        
        setPaises(dataPaises)


    },[]) 


    const onSelectDepartamento = (event) => {
        event.preventDefault()
        const pp  = event.target.value
        setDepartamentos(dataDepartamentos.filter(res => res.idPais == pp))
        // setProvincia(dataProvincias.filter(res => res.idPais == pp))
        setSelectpais(event.target.selectedOptions[0].text)
    }
    
    const onSelectProvincias = (event) => {
        event.preventDefault()
        const dd = event.target.value
        setProvincia(dataProvincias.filter(res => res.idDepartamento == dd))
        setSelectdepartamento(event.target.selectedOptions[0].text)
    }

    const onSelectProvincia = (event) => {
       
        setSelectprovincia(event.target.selectedOptions[0].text)
    }


    const enviarFn = (event) => {
        event.preventDefault()
        console.log("Datos seleccioandos: Pais: "+selectpais+", Departamento: "+selectdepartamento+", Provincia: "+selectprovincia);
    }
    
    return (
        <div>
            <Select datas={paises} label="Pais" fn={onSelectDepartamento}></Select><br />
            <Select datas={departamentos} label="Departamento" fn={onSelectProvincias}></Select><br />
            <Select datas={provincias} label="Provincia" fn={onSelectProvincia}></Select><br />
            <button type="submit" onClick={enviarFn}>Enviar</button></div>
    )
}

export default FormularioPais