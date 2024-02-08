import React from "react";
import { useState } from "react";
import Button from "../../../general/Button";
import ListaPrincipal from "../../../general/ListaPrincipal";

function PresentAndPast() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex flex-col gap-1 justify-evenly" >
      <button
        className={` ${visible ? " bg-red-700" : "bg-blue-700 "} px-2 py-1 text-white`}
        onClick={() => setVisible(!visible)}
      >
        Present and Past
      </button>      

      <div className={`${visible ? "flex flex-wrap gap-1" : "hidden"}`}>
        <Button
          texto={"presente continuo"}
          list={ListaPrincipal.presentContinuous}
        ></Button>
        <Button
          texto={"simple Present"}
          list={ListaPrincipal.simplePresent}
        ></Button>
        <Button
          texto={"simple Present & continuos 1"}
          list={ListaPrincipal.prese_cont_and_simple_present}
        ></Button>
        <Button
          texto={"simple Present & continuos 2"}
          list={ListaPrincipal.presentContinuousAndSimplePresent2}
        ></Button>
        <Button texto={"simple past"} list={ListaPrincipal.simplePast}></Button>
        <Button
          texto={"past continuos"}
          list={ListaPrincipal.pastContinuous}
        ></Button>
      </div>
    </div>
  );
}

export default PresentAndPast;
