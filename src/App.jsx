

import Navbar from './componentes/general/Navbar/Navbar'
import useStore from './componentes/Zustand/State'
import MidElement from './componentes/general/ElementoCentral.jsx/MidElement'
import Notepad from './componentes/general/Notepad'


function App() {
  const {visible} = useStore()
  console.log(visible)

  return (
    <>
    <header>
      <Navbar />
      <Notepad />
    </header>
    <main>
      <MidElement/>
      {/* <BookGrama/>  */}
    </main>
    </>
  )
}

export default App
