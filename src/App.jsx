import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Prueba from './componentes/poliglota/level1/Prueba'
import ListaPrincipal from './componentes/poliglota/level1/ListaPrincipal'
import useStore from './componentes/Zustand/State'




function App() {

  const {lista, add, removeItem } = useStore()
  console.log(lista)
  const [element, setElement] = useState('')
  console.log(element)
  const [respuesta, setRespuesta] = useState('')


  let r
  function randomN( min,max ) {
    r = Math.floor(Math.random() * (max - min + 1)) + min;    
    return r
  }

  const getRandomElement = () => {
    let n1 = randomN(0, lista.length-1)
    console.log(n1)
    let n2 = randomN(0, lista[n1].length-1)
    console.log(n2)
    let n3 = lista[n1][n2]
    console.log(n1,n2,n3)
    setElement(n3)
  }

  

  return (
    <div className='flex bg-slate-300 h-screen justify-around items-center c' >  
      <div>
        <div>
          <button 
            className='bg-amber-400' 
            onClick={ getRandomElement } >random question
            
          </button>

          <p> { element.length > 0 ? element[1] : "" } </p>
          <div className='pt-5' >
            <button onClick={()=>setRespuesta(element[0])} className='bg-teal-600 px-2 rounded-sm text-blue-950' >show answer</button>
            <p>{respuesta}</p>
          </div>
        </div>
      </div>    
      <div>
        <Prueba texto={'Presente continuo'} list={ListaPrincipal.presentContinuous}> texto  </Prueba>              
      </div>
    </div>
  )
}

export default App
