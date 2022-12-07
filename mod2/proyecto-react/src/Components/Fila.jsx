const Fila = ({title,brand,category,thumbnail}) => {
    return (
        <div>
            <td>{title}</td>
            <td>{brand}</td>
            <td>{category}</td>
            <td><img src={thumbnail}/></td>
        </div>
    )
}

export default Fila