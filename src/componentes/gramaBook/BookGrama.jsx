import { useState } from "react";
import Button from "../general/Button";
import ListaPrincipal from "../general/ListaPrincipal";
import useStore from "../Zustand/State";
import Basico from "./niveles/Basico/Basico";
import Intermedio from "./niveles/Intermedio/Intermedio";
import Avanzado from "./niveles/Avanzado/Avanzado";

function BookGrama() {
  const { visible } = useStore();

  return (

      <div className={`${visible === "grama" ? "flex" : "hidden"}  gap-1 flex-wrap justify-center
      flex-col gap-4 content-center
      ` }>
          <Basico />
          <Intermedio />
          <Avanzado />
        {/* <Button
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
        ></Button> */}
        
        {/* <Button
          texto={"present perfect"}
          list={ListaPrincipal.presentPerfect}
        ></Button>
        <Button
          texto={"present perf&past"}
          list={ListaPrincipal.presentPerfectAndPast}
        ></Button>
        <Button
          texto={"present perf&past2"}
          list={ListaPrincipal.presentPerfectAndPastTwo}
        ></Button> */}
      </div>
    
  );
}

export default BookGrama;
