import ListaPrincipal from "../../../general/ListaPrincipal"
import { useState } from "react"
import Button from "../../../general/Button"


function QuestionsAuxiliaryVerbs() {
  const [visible, setVisible] = useState(false)
  
  return (
    <div className='flex flex-col gap-1' >

        
        <button
        className={` ${visible ? " bg-red-700" : "bg-blue-700 "} px-2 py-1 text-white`}
          onClick ={ ()=> setVisible(!visible)}
        >
            Questions and auxiliary verbs
        </button>

        <div className={`${visible ? "flex flex-wrap gap-1" : "hidden"}`} >
            <Button
            texto={"Questions 1"}
            list={ListaPrincipal.pasive }
            ></Button>
            <Button
            texto={"Questions 2"}
            list={ListaPrincipal.itissaidthat}
            ></Button>
            <Button
            texto={"Auxiliary verbs 1"}
            list={ListaPrincipal.havesomethingdone}
            ></Button>            
            <Button
            texto={"Tag questions"}
            list={ListaPrincipal.havesomethingdone}
            ></Button>            
        </div>
      
    </div>
  )
}

export default QuestionsAuxiliaryVerbs
