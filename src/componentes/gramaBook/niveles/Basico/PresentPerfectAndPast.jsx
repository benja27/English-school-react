import React, { useState } from 'react'
import Button from '../../../general/Button'
import ListaPrincipal from '../../../general/ListaPrincipal'


function PresentPerfectAndPast() {
    const [visible, setVisible] = useState(false)


  return (
    <div className='flex flex-col gap-1' >

        
        <button
        className={` ${visible ? " bg-red-700" : "bg-blue-700 "} px-2 py-1 text-white`}
          onClick ={ ()=> setVisible(!visible)}
        >
          Present Perfect and Past
        </button>

        <div className={`${visible ? "flex flex-wrap gap-1" : "hidden"}`} >
            <Button
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
            ></Button>
        </div>
      
    </div>
  )
}

export default PresentPerfectAndPast
