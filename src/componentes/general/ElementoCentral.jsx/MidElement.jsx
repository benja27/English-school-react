import { useState } from "react"

import Button from "../Button"
import useStore from "../../Zustand/State"
import ListaPrincipal from "../ListaPrincipal"
import PreguntayRespuesta from "./PreguntayRespuesta"
import BookGrama from "../../gramaBook/BookGrama"
import Vocabulario from "../../Contextos/Casa"
import Casa from "../../Contextos/Casa"

function MidElement() {
  return (
    <div className="flex bg-slate-300 min-h-screen  gap-2 justify-around items-start p-7 ">
      <PreguntayRespuesta/>
      <div className=" w-full" >
        <BookGrama/>
        <Casa/>
      </div>
    </div>
  )
}

export default MidElement