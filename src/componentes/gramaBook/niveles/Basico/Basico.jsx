import React from 'react'
import PresentAndPast from './PresentAndPast'
import PresentPerfectAndPast from './PresentPerfectAndPast'
import Future from './Future'


function Basico() {
  return (
    <div>
        <h1 className='text-center text-2xl font-semibold cursor-pointer bg-emerald-700 text-orange-100'>Basic</h1>
        <div>
            <PresentAndPast     />
            <PresentPerfectAndPast />
            <Future />
        </div>
    </div>
  )
}

export default Basico
