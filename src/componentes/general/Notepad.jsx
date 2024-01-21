import React from 'react'
import useStore from '../Zustand/State'

function Notepad() {
  const {notepad} = useStore()

  return (
    <div className={`${ notepad === true ? "flex" : "hidden" } px-3`} >
      <textarea className='p-2' name="" id="" cols="150" rows="5"></textarea>
    </div>
  )
}

export default Notepad