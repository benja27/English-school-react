import { useState } from "react";
import useStore from "../../Zustand/State";

function PreguntayRespuesta() {

  const { lista } = useStore();
  console.log(lista)
  const [element, setElement] = useState("");
  // console.log(element)
  const [respuesta, setRespuesta] = useState("");
  const [isItemSelected, setIsItemSelected] = useState(false);

  let r;
  function randomN(min, max) {
    r = Math.floor(Math.random() * (max - min + 1)) + min;
    return r;
  }

  const getRandomElement = () => {
    setIsItemSelected(false);
    let n1 = randomN(0, lista.length - 1);
    // console.log(n1)
    let n2 = randomN(0, lista[n1].length - 1);
    // console.log(n2)
    let n3 = lista[n1][n2];
    // console.log(n1,n2,n3)
    setElement(n3);
    //will set state only if there is an item selected
    setIsItemSelected(true);
  };



  return (
    <div className="asis-[450px] min-w-[30%] p-3">
        <div className="text-center flex flex-col">

          <button
            className="bg-amber-400 hover:bg-amber-600 text-xl font-bold py-2"
            onClick={getRandomElement}
          >
            Random Sentence
          </button>
          {isItemSelected ? null: (<p className="text-xl font-medium text-center p-3 text-red-600">Select an Item to Start</p>) }

          <p className="text-xl font-medium text-center p-3">
            {" "}
            {element.length > 0 ? element[1] : ""}{" "}
          </p>

          <button
            onClick={() => setRespuesta(element[0])}
            className="bg-teal-600 text-white text-xl py-2 font-bold px-2 rounded-sm "
          >
            Answer
          </button>

          <p className="text-xl font-medium text-center p-3">{respuesta}</p>

          <button className="bg-blue-700 text-white py-2 rounded-md hover:scale-110"    >
            Mostrar todos los elementos
          </button>
          <br />
          <button className="bg-blue-700 text-white py-2 rounded-md hover:scale-110"    >
            Mostrar vocabulario
          </button>

        </div>
      </div>
  )
}

export default PreguntayRespuesta