import { useState } from "react"
import useStore from "../../Zustand/State"
import Contexto from "./Contexto"

function Navbar() {
  const {visible, changeVisible, notepad, changeNotepad} = useStore()

  const [menu, setMenu] = useState("")

  console.log(visible)
  return (
    <div className='bg-black py-2 text-white flex flex-col items-center gap-3 justify-center ' >
      <div className="flex gap-3" >
        <h3 className=" cursor-pointer " onClick={()=> changeNotepad(!notepad)} >Notepad</h3>
        <h4 onClick={()=>changeVisible("grama")} className='cursor-pointer' >Grama Book</h4>
        <h4 onClick={()=>setMenu("contexto")}  className="cursor-pointer" >Contexto</h4>
        <h3>Tiempos</h3>
      </div>
      
      <Contexto isvisible={menu} />

      
    </div>
  )
}

export default Navbar