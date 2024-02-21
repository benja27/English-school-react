import useStore from "../Zustand/State"
import Button from "../general/Button"
import ListasContexto from "./ListasContexto"

function Casa() {
  const {visible} = useStore()

  return (
    <div className={`${ visible === "casa" ? "flex" : "hidden" }`} >
    
      <div className="w-full flex gap-2 items-start justify-around flex-wrap" >
        <Button texto={"acciones"} list={ListasContexto.verbosCasa} />
        <Button texto={"frs2"} list={ListasContexto.FrasesCasa} />

        <Button texto={"txt1"} list={ListasContexto.journal1 } />
        <Button texto={"Fisicas"} list={ListasContexto.accFisicas } />

        <Button list={ListasContexto.casaLargos} texto={"Texto largos"} />
      </div>
    
    </div>
  )
}

export default Casa