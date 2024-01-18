

import Navbar from './componentes/general/Navbar/Navbar'
import useStore from './componentes/Zustand/State'
import MidElement from './componentes/general/ElementoCentral.jsx/MidElement'
import Notepad from './componentes/general/Notepad'


function App() {
  const {visible} = useStore()
  console.log(visible)

  return (
    <div>
      <Navbar />
      <Notepad/>
      <MidElement/>
      {/* <BookGrama/>  */}
    </div>

    
  )
}

export default App
