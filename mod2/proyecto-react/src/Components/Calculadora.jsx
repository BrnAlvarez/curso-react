import {useState} from 'react'


 
const Calculadora = () => {
    const [num1, setNum1] = useState('0')
    const [num2, setNum2] = useState('0')

    const [action,setAction] = useState('')
    const [resultado, setResultado] = useState('0')
    
    const onChangeNum1 = (event) => {
        event.preventDefault()
        setNum1(event.target.value)
    }
    const onChangeNum2 = (event) => {
        event.preventDefault()
        setNum2(event.target.value)
    }
    const onChangeAction = (event) => {
        event.preventDefault()
        setAction(event.target.value)
    }
    const onChangeResultado = (event) => {
        event.preventDefault()
        setResultado(event.target.value)
    }
    const procesar = (event) => {
        event.preventDefault()

        if(action==='suma'){
            setResultado(parseInt(num1) + parseInt(num2))
        }else if(action==='resta'){
            setResultado(parseInt(num1) - parseInt(num2))
        }else if(action==='dividir'){
            setResultado(parseInt(num1) / parseInt(num2))
        }else if(action==='multiplicar'){
            setResultado(parseInt(num1) * parseInt(num2))
        }  else {
            setResultado('')
        }
    }
      
    return (
        <div>
            <h2>Traductor</h2>
            
            <div>
                <label htmlFor="num1">
                    Num 1:
                </label>
                <input type="number" id="num1" name="num1" value={num1} onChange={onChangeNum1} />
            

                <label htmlFor="num2">
                    Num 2:
                </label>
                <input type="number" id="num2" name="num2" value={num2}  onChange={onChangeNum2} />
            
            </div>
            <br />
            <div>
            <label htmlFor="Action">
                    Action:
                </label>
                <input type="text" id="action" name="action"  value={action} onChange={onChangeAction}/>
            </div>
            <br />
            <div>
            <label htmlFor="resultado">
                    Resultado:
                </label>
                <input type="number" id="resultado" name="resultado"  value={resultado} disabled  onChange={onChangeResultado}/>
            </div>
            <br />
            <div>
                <button onClick={procesar}>PROCESAR</button>
            </div>
            
        </div>
    )
}

export default Calculadora