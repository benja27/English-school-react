import useStore from "../../Zustand/State"


function Contexto( {isvisible} ) {
  const {visible, changeVisible}  = useStore()


  return (    
    <ul className={`${isvisible === "contexto" ? " flex gap-3":"hidden"} `} >
        <li 
          className="cursor-pointer hover:scale-125"
          onClick={()=> changeVisible("casa")}
            >Casa</li>
        <li className="cursor-pointer hover:scale-125"  >Trabajo</li>
        <li className="cursor-pointer hover:scale-125"  >Casa</li>
        <li className="cursor-pointer hover:scale-125"  >Casa</li>        
    </ul>
  )
}

export default Contexto