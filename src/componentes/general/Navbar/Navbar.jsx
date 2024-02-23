import { useState } from "react"
import useStore from "../../Zustand/State"
import Contexto from "./Contexto"

function Navbar() {
  const {visible, changeVisible, notepad, changeNotepad} = useStore()

  const [menu, setMenu] = useState("")

  console.log(visible)
  return (
    <nav className='bg-black py-2 text-white flex flex-col items-center gap-3 justify-center ' >
      <ul className="flex gap-3" >
        <li className=" cursor-pointer " onClick={()=> changeNotepad(!notepad)} >Notepad</li>
        <li onClick={()=>changeVisible("grama")} className='cursor-pointer' >Grama Book</li>
        <li onClick={()=>setMenu("contexto")}  className="cursor-pointer" >Contexto</li>
        <li>Tiempos</li>
      </ul>
      <Contexto isvisible={menu} />
    </nav>
  )
}

export default Navbar