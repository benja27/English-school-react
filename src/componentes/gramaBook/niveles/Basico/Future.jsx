import ListaPrincipal from "../../../general/ListaPrincipal"
import { useState } from "react"
import Button from "../../../general/Button"


function Future() {
  const [visible, setVisible] = useState(false)
  
  return (
    <div className='flex flex-col gap-1' >

        
        <button
        className={` ${visible ? " bg-red-700" : "bg-blue-700 "} px-2 py-1 text-white`}
          onClick ={ ()=> setVisible(!visible)}
        >
          Futuro
        </button>

        <div className={`${visible ? "flex flex-wrap gap-1" : "hidden"}`} >
            <Button
            texto={"present tenses"}
            list={ListaPrincipal.presentTenses }
            ></Button>
            <Button
            texto={"I am going to do"}
            list={ListaPrincipal.iamGoingToDo}
            ></Button>
            <Button
            texto={"will"}
            list={ListaPrincipal.will1}
            ></Button>
            <Button
            texto={"will2"}
            list={ListaPrincipal.will2}
            ></Button>
            <Button
            texto={"i will and I am going to"}
            list={ListaPrincipal.iwillAndIamGoingTo}
            ></Button>
            <Button
            texto={"will be doing"}
            list={ListaPrincipal.willBeDoing}
            ></Button>
            <Button
            texto={"when I do"}
            list={ListaPrincipal.whenIdo}
            ></Button>
        </div>
      
    </div>
  )
}

export default Future
