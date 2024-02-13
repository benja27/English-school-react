import ListaPrincipal from "../../../general/ListaPrincipal"
import { useState } from "react"
import Button from "../../../general/Button"


function Pasive() {
  const [visible, setVisible] = useState(false)
  
  return (
    <div className='flex flex-col gap-1' >

        
        <button
        className={` ${visible ? " bg-red-700" : "bg-blue-700 "} px-2 py-1 text-white`}
          onClick ={ ()=> setVisible(!visible)}
        >
          Pasive
        </button>

        <div className={`${visible ? "flex flex-wrap gap-1" : "hidden"}`} >
            <Button
            texto={"pasive"}
            list={ListaPrincipal.pasive }
            ></Button>
            <Button
            texto={"it is said that"}
            list={ListaPrincipal.itissaidthat}
            ></Button>
            <Button
            texto={"have something done"}
            list={ListaPrincipal.havesomethingdone}
            ></Button>            
        </div>
      
    </div>
  )
}

export default Pasive
