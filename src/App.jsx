import BookGrama from './componentes/gramaBook/BookGrama'
import Navbar from './componentes/general/Navbar'
import useStore from './componentes/Zustand/State'
import MidElement from './componentes/general/ElementoCentral.jsx/MidElement'



function App() {
  const {visible} = useStore()
  console.log(visible)

  return (
    <div>
      <Navbar />
      <MidElement/>
      {/* <BookGrama/>  */}
    </div>

    
  )
}

export default App
