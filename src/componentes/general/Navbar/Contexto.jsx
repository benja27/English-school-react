import useStore from "../../Zustand/State"


function Contexto( {isvisible} ) {
  const {visible, changeVisible}  = useStore()


  return (    
    <div className={`${isvisible === "contexto" ? " flex gap-3":"hidden"} `} >
        <h3 
          className="cursor-pointer hover:scale-125"
          onClick={()=> changeVisible("casa")}
            >Casa</h3>
        <h3 className="cursor-pointer hover:scale-125"  >Trabajo</h3>
        <h3 className="cursor-pointer hover:scale-125"  >Casa</h3>
        <h3 className="cursor-pointer hover:scale-125"  >Casa</h3>        
    </div>
  )
}

export default Contexto