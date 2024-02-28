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
    <div>
      <Navbar />
      <Notepad/>
      {splashVisibility && (
        <SplashScreen
          visibility={splashVisibility}
          setVisibility={setSplashVisibility}
        />
      )}
      <MidElement/>
      {/* <BookGrama/>  */}
    </div>
  )
}

export default App
