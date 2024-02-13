import ListaPrincipal from "../../../general/ListaPrincipal"
import { useState } from "react"
import Button from "../../../general/Button"


function Modals() {
  const [visible, setVisible] = useState(false)
  
  return (
    <div className='flex flex-col gap-1' >

        
        <button
        className={` ${visible ? " bg-red-700" : "bg-blue-700 "} px-2 py-1 text-white`}
          onClick ={ ()=> setVisible(!visible)}
        >
          Modals
        </button>

        <div className={`${visible ? "flex flex-wrap gap-1" : "hidden"}`} >
            <Button
            texto={"can could and be able to"}
            list={ListaPrincipal.canCouldAndBeAbleTo }
            ></Button>
            <Button
            texto={"could and could have done"}
            list={ListaPrincipal.couldAndCouldHaveDone}
            ></Button>
            <Button
            texto={"must"}
            list={ListaPrincipal.must}
            ></Button>
            <Button
            texto={"may and might 1"}
            list={ListaPrincipal.mayAndMight1}
            ></Button>
            <Button
            texto={"may and might 2"}
            list={ListaPrincipal.mayAndMight2}
            ></Button>
            <Button
            texto={"have to and must"}
            list={ListaPrincipal.haveToAndMust}
            ></Button>
            <Button
            texto={"should"}
            list={ListaPrincipal.should}
            ></Button>
            <Button
            texto={"subjuntive"}
            list={ListaPrincipal.subjuntive}
            ></Button>
            <Button
            texto={"had better"}
            list={ListaPrincipal.hadBetter}
            ></Button>
            <Button
            texto={"would"}
            list={ListaPrincipal.would}
            ></Button>
            <Button
            texto={"can could would"}
            list={ListaPrincipal.can_could_would}
            ></Button>
        </div>
      
    </div>
  )
}

export default Modals
