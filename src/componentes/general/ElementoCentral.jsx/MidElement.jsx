import { useState } from "react"

import Button from "../Button"
import useStore from "../../Zustand/State"
import ListaPrincipal from "../ListaPrincipal"
import PreguntayRespuesta from "./PreguntayRespuesta"
import BookGrama from "../../gramaBook/BookGrama"

function MidElement() {
  return (
    <div className="flex bg-slate-300 h-screen gap-2 justify-around items-center p-7 ">
      <PreguntayRespuesta/>
      <BookGrama/>
    </div>
  )
}

export default MidElement