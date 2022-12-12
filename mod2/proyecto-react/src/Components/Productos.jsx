import { useEffect,useState } from "react"
import Fila from "./Fila"
import './css/Tabla.css'
const Productos = () => {
    const [productos, setProductos] = useState([])
    
    useEffect(() => {
        fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then((data) => {
            console.log(data.products)
            setProductos(data.products)
        })
    },[])
    
    return (
        <div>
            <h2>Mostrando productos</h2>
            <div>
            <table>
                <thead>
                    <tr>
                        <th>titulo</th>
                        <th>brand</th>
                        <th>category</th>
                        <th>thumbnail</th>
                    </tr>
                </thead>
                <tbody>
                    {   
                    //Map retona valores a diferencia de for foreEach u otro
                        productos.map((producto) => {
                            return(
                                <Fila id={producto.id} title={producto.title} brand={producto.brand} category={producto.cateogry} thumbnail={producto.thumbnail} />
                            )
                        })
                    }
                </tbody>
            </table>

            </div>
        </div>
    )
}

export default Productos