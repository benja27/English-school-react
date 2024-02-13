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
            <Button
            texto={"present perfect continuos"}
            list={ListaPrincipal.presentPerfectAndPastTwo}
            ></Button>
            <Button
            texto={"present perfect continuos and simple"}
            list={ListaPrincipal.presentPerfectAndPastTwo}
            ></Button>
            <Button
            texto={"present how long have you"}
            list={ListaPrincipal.presentPerfectAndPastTwo}
            ></Button>
            <Button
            texto={"for and since"}
            list={ListaPrincipal.presentPerfectAndPastTwo}
            ></Button>
            <Button
            texto={"Past perfect"}
            list={ListaPrincipal.presentPerfectAndPastTwo}
            ></Button>
            <Button
            texto={"past perfect continuos"}
            list={ListaPrincipal.presentPerfectAndPastTwo}
            ></Button>
            <Button
            texto={"have and have got"}
            list={ListaPrincipal.presentPerfectAndPastTwo}
            ></Button>
            <Button
            texto={"used to"}
            list={ListaPrincipal.presentPerfectAndPastTwo}
            ></Button>
        </div>
      
    </div>
  )
}

export default PresentPerfectAndPast
