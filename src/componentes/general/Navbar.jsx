import useStore from "../Zustand/State"

function Navbar() {
  const {visible, changeVisible} = useStore()

  console.log(visible)
  return (
    <div className='bg-black py-2 text-white flex gap-3 justify-center ' >
      <h4 onClick={()=>changeVisible("grama")} className='cursor-pointer' >Grama Book</h4>
      <h4 onClick={()=>changeVisible("vocabulary")}  className="cursor-pointer" >Vocabulario</h4>
    </div>
  )
}

export default Navbar