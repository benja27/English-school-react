import Navbar from './componentes/general/Navbar/Navbar'
import useStore from './componentes/Zustand/State'
import MidElement from './componentes/general/ElementoCentral.jsx/MidElement'
import Notepad from './componentes/general/Notepad'
import SplashScreen from './pages/SplashScreen';
import { useState } from 'react';


function App() {
  const {visible} = useStore()
  console.log(visible)
  const [splashVisibility, setSplashVisibility] = useState(true);

  return (
    <>
    <header>
      <Navbar />
      <Notepad />
    </header>
    <main>
      {splashVisibility && (
        <SplashScreen
          visibility={splashVisibility}
          setVisibility={setSplashVisibility}
        />
      )}
      <MidElement/>
      {/* <BookGrama/>  */}
    </main>
    </>
  )
}

export default App
