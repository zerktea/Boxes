import React from 'react'
import './App.css'
import Boxes from "./components/Boxes.jsx"
import Data from "./data"
function App() {
const [lightMode,setLightMode]=React.useState(false)
const [squares, setSquares] = React.useState(Data)
function handleClick(val){
  setSquares((oldSquares)=>{
    const newTempSquares = []
    oldSquares.map(oldSquare=>{
      if(oldSquare.id === val){
        const not = !oldSquare.on
        oldSquare={
          ...oldSquare,
          on: not
        }
      }
      newTempSquares.push(oldSquare)
    })
  return newTempSquares
  }
  )
}
const BoxesElements = squares.map(box => {
  return (
  <Boxes
    key={box.id}
    id={box.id}
    isOn={box.on}
    handleClick = {handleClick}
  />)
})
function lightOn(){
  const root = document.getElementById('root')
    setLightMode((oldMode)=>{
      // root.style.backgroundColor = oldMode? "white":"gray"
      return !oldMode
    }
    )
}

  return (
    <div className="App">
      <div>
            <div>
        <label className="switch switch200" onClick={lightOn}>
          <input type="checkbox"/>
          <span className="slider slider200"></span>
        </label> 
      </div>

           
      </div>
    <div>
      {BoxesElements}
      </div>
    </div>
  )
}

export default App
