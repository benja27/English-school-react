import ListaPrincipal from "../../../general/ListaPrincipal"
import { useState } from "react"
import Button from "../../../general/Button"


function IFAndWish() {
  const [visible, setVisible] = useState(false)
  
  return (
    <div className='flex flex-col gap-1' >

        
        <button
        className={` ${visible ? " bg-red-700" : "bg-blue-700 "} px-2 py-1 text-white`}
          onClick ={ ()=> setVisible(!visible)}
        >
          IFAndWish
        </button>

        <div className={`${visible ? "flex flex-wrap gap-1" : "hidden"}`} >
            <Button
            texto={"if i do and if i did"}
            list={ListaPrincipal.ifido_and_ifidid }
            ></Button>
            <Button
            texto={"if i knew and if i wish i knew"}
            list={ListaPrincipal.ifiknew_iwhishiknew}
            ></Button>
            <Button
            texto={"if i had known"}
            list={ListaPrincipal.ifIhadknown}
            ></Button>
            <Button
            texto={"wish"}
            list={ListaPrincipal.wish}
            ></Button>            
        </div>
      
    </div>
  )
}

export default IFAndWish
