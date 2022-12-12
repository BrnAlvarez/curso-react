import './css/Fila.css'
const Fila = ({id,title,brand,category,thumbnail}) => {

    return (
        <div>
            <tr key={id}>
                <td>{title}</td>
                <td>{brand}</td>
                <td>{category}</td>
                <td><img alt={title} src={thumbnail} className="image"/></td>
            </tr>
        </div>
    )
}

export default Fila