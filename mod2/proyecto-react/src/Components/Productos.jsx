import { useEffect,useState } from "react"
import Fila from "./Fila"
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
                        productos.map((producto) => {
                            return(
                                <tr key={producto.id}>
                                    <Fila title={producto.title} brand={producto.brand} category={producto.cateogry} thumbnail={producto.thumbnail} />
                                </tr>
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