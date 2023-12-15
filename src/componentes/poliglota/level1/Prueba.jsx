import { useEffect, useState } from "react"
import useStore from "../../Zustand/State"

let opciones = ["asdf","123123"]




function Prueba( { list, texto, child } ) {
  const {lista, add, removeItem } = useStore()
  const [active, setActive] = useState(false)

 const handleAdd = (item) => {
  if( lista.includes(item) ){
    removeItem(item)  
  }else{
    add(item)
  }  
  setActive(!active)
 }

const handleRemove = (item) => {
  removeItem(item)
}

  return (
    <>
      <button 
        className={`${active ? "bg-red-600": "bg-blue-600 "}  text-white rounded-sm px-2 py-1`}
        onClick={()=>handleAdd(list)}
      >
        { texto } </button>
      
      {/* <p>{lista}</p>     */}
      <p>{child}</p>    
      
    </>
  )
}

export default Prueba