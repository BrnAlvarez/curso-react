// import logo from './logo.svg'
import './App.css'
// import Saludo from './Components/Saludo'
// import Formulario from './Components/Formulario'
// import Traductor from './Components/Traductor'
import Calculadora from './Components/Calculadora'

function App() {

  

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Saludo nombres={'Brian'} apellidos={'Alvarez'} />
        <Formulario></Formulario>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Traductor /> */}
      <Calculadora />
    </div>
  )
}

export default App;
