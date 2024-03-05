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
  return (
    <section 
      id="panels-container"
      className="flex flex-col sm:flex-row items-center sm:items-start bg-slate-300 min-h-screen  gap-2 justify-around items-start p-7">
      <PreguntayRespuesta/>
      <div className=" w-full flex flex-col" >
          <BookGrama/>
          <Casa/>
          <div>
           <Tiempos/>
          </div>
      </div>
    </section>
  )
}

export default MidElement