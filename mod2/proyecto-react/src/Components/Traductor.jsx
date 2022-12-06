 import {useState} from 'react'

const Traductor = () => {
    const [espanol, setEspanol] = useState('Lunes')
    const [ingles, setIngles] = useState('Monday')
    const [portugues, setPortugues] = useState('Segunda-feira')

    const [idioma, setIdioma] = useState('')
    const [resultado, setResultado] = useState('')
    
    const onChangeEspanol = (event) => {
        event.preventDefault()
        setEspanol(event.target.value)
    }
    const onChangeIngles = (event) => {
        event.preventDefault()
        setIngles(event.target.value)
    }
    const onChangePortugues = (event) => {
        event.preventDefault()
        setPortugues(event.target.value)
    }
    const onChangeIdioma = (event) => {
        event.preventDefault()
        setIdioma(event.target.value)
    }
    const onChangeResultado = (event) => {
        event.preventDefault()
        setResultado(event.target.value)
    }
    const procesar = (event) => {
        event.preventDefault()

        if(idioma==='espanol'){
            setResultado(espanol)
        } else if (idioma==='ingles'){
            setResultado(ingles)
        } else if (idioma==='portugues'){ 
            setResultado(portugues)
        } else {
            setResultado('')
        }
    }
      
    return (
        <div>
            <h2>Traductor</h2>
            
            <div>
                <label htmlFor="espanol">
                    Espanol:
                </label>
                <input type="text" id="espanol" name="espanol" value={espanol} onChange={onChangeEspanol} />
            

                <label htmlFor="ingles">
                Ingles:
                </label>
                <input type="text" id="ingles" name="ingles" value={ingles}  onChange={onChangeIngles} />
            
                
                <label htmlFor="portugues">
                    Portugues:
                </label>
                <input type="text" id="portugues" name="portugues"  value={portugues}  onChange={onChangePortugues} />
            </div>
            <br />
            <div>
            <label htmlFor="idioma">
                    Seleccione el idioma:
                </label>
                <input type="text" id="idioma" name="idioma"  value={idioma} onChange={onChangeIdioma}/>
            </div>
            <br />
            <div>
            <label htmlFor="resultado">
                    Resultado:
                </label>
                <input type="text" id="resultado" name="resultado"  value={resultado} disabled  onChange={onChangeResultado}/>
            </div>
            <br />
            <div>
                <button onClick={procesar}>PROCESAR</button>
            </div>
            
        </div>
    )
}

export default Traductor