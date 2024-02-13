import React from 'react'
import PresentAndPast from './PresentAndPast'
import PresentPerfectAndPast from './PresentPerfectAndPast'
import Future from './Future'
import Modals from './Modals'
import IFAndWish from './IfAndWish'
import Pasive from './Pasive'
import ReportedSpeech from './ReportedSpeech'


function Basico() {
  return (
    <div>
        <h1 className='text-center text-2xl font-semibold cursor-pointer bg-emerald-700 text-orange-100'>Basic</h1>
        <div>
            <PresentAndPast     />
            <PresentPerfectAndPast />
            <Future />
            <Modals />
            <IFAndWish />
            <Pasive />
            <ReportedSpeech />
        </div>
    </div>
  )
}

export default Basico
