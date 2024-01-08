import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Prueba from './componentes/poliglota/level1/Prueba'
import Button from './componentes/general/Button'
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
    <div className='flex bg-slate-300 h-screen gap-2 justify-around items-center p-7 ' >  

      <div className='basis-[450px] p-3' >
        <div className='text-center flex flex-col' >  

          <button 
            className='bg-amber-400 text-xl font-bold py-2' 
            onClick={ getRandomElement } >Random Sentence
          </button>

          <p className='text-xl font-medium text-center p-3' > { element.length > 0 ? element[1] : "" } </p>
          
          <button onClick={()=>setRespuesta(element[0])} className='bg-teal-600 text-white text-xl py-2 font-bold px-2 rounded-sm ' >Answer</button>
          
          <p className='text-xl font-medium text-center p-3' >{respuesta}</p>          

        </div>
      </div>    
      
      <div className='flex gap-1 flex-wrap justify-center' >        
        <Button texto={"presente continuo"} list={ListaPrincipal.presentContinuous} ></Button>
        <Button texto={"simple Present"} list={ListaPrincipal.simplePresent} ></Button>
        <Button texto={"simple Present & continuos 1"} list={ListaPrincipal.prese_cont_and_simple_present} ></Button>
        <Button texto={"simple Present & continuos 2"} list={ListaPrincipal.presentContinuousAndSimplePresent2} ></Button>
        <Button texto={"simple past"} list={ListaPrincipal.simplePast} ></Button>
        <Button texto={"past continuos"} list={ListaPrincipal.pastContinuous} ></Button>
        <Button texto={"present perfect"} list={ListaPrincipal.presentPerfect} ></Button>
        <Button texto={"present perf&past"} list={ListaPrincipal.presentPerfectAndPast} ></Button>
        <Button texto={"present perf&past2"} list={ListaPrincipal.presentPerfectAndPastTwo} ></Button>
      </div>

    </div>
  )
}

export default App
