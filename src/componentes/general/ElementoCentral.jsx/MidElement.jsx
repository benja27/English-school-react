import { useState } from "react"

import Button from "../Button"
import useStore from "../../Zustand/State"
import ListaPrincipal from "../ListaPrincipal"
import PreguntayRespuesta from "./PreguntayRespuesta"
import BookGrama from "../../gramaBook/BookGrama"
import Vocabulario from "../../Contextos/Casa"
import Casa from "../../Contextos/Casa"
import Tiempos from "../Tiempos"

function MidElement() {
  const [width, setWidth] = useState(window.innerWidth)

  window.addEventListener("resize", () => {
    setWidth(window.innerWidth)
  })

  console.log(width)

  return (
    <div className={`${width < 600 ? "flex-col items-center c" : ""} flex bg-slate-300 min-h-screen  gap-2 justify-around items-start p-7`}>
      
      <PreguntayRespuesta/>

      <div className=" w-full" >
        <div className="flex flex-col"  >
          <BookGrama/>
          <Casa/>
          <div>
           <Tiempos/>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default MidElement