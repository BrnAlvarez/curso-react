import {useEffect, useState} from 'react' 


const Dog = () => {
    const [titulo, setTitulo] = useState('Dog Component')
    const [data, setData] = useState({message:'test'})
    useEffect(() => {
        // fetch('https://jsonplaceholder.typicode.com/todos/1')
        // .then(response => response.json())
        // .then(json => console.log(json))
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then((data) => {
            setData(data);
        })

    },[titulo])
    console.log('Loaded!!!');
  const onClickButton = () => {
    setTitulo('Cambia titulo '+parseInt(Math.random(10)))
  }
    
    return (
        <div>
            <h2>{titulo}</h2>
            <button onClick={onClickButton}>Click</button>
            
            <img src={data.message} />
        </div>
    )
}
export default Dog