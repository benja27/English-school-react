import React from 'react'
import useStore from '../Zustand/State'


function Tiempos() {
  const {tiempos} = useStore()


  return (
    <div className='mt-3' >
      {/* <h1>tiempos</h1> */}
    </div>
  )
}

export default Tiempos
