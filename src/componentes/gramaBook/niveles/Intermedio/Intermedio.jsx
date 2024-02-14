import React from 'react'
import PresentAndPast from '../Basico/PresentAndPast'
import QuestionsAuxiliaryVerbs from './QuestionsAuxiliaryVerbs'


function Intermedio() {
  return (
    <div>
        <h1 className='text-center text-2xl font-semibold cursor-pointer bg-emerald-700 text-orange-100'>Intermedio</h1>
        <div>
            <QuestionsAuxiliaryVerbs     />
        </div>
    </div>
  )
}

export default Intermedio
