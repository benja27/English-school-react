import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Prueba from './componentes/poliglota/level1/Prueba'
import ListaPrincipal from './componentes/poliglota/level1/ListaPrincipal'
import useStore from './componentes/Zustand/State'




function App() {

  const {lista, add, removeItem } = useStore()

  let r
  function randomN( min,max ) {
    r = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(r)    
    console.log(lista[r][r][0])
    console.log(lista)
    
    return r

  }
  

  return (
    <div className='flex bg-slate-300 h-screen justify-around items-center' >  
      <div>
        <div>
          <button 
            className='bg-amber-400' 
            onClick={()=>randomN(0, lista.length -1)} >random question
            
          </button>

          <p> { r !== 0 ? r : "" } </p>
        </div>
      </div>    
      <div>
        <Prueba texto={'articulos'} list={ListaPrincipal.articulos}> texto  </Prueba>      
        <Prueba texto={"verbos"} list={ListaPrincipal.verbos} ></Prueba>      

      </div>
    </div>
  )
}

export default App
