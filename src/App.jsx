import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [index, setIndex] = useState(0);
  //mint green, pastel yellow, pastel red, light blue, purple
  const colorNames = ['Mint Green', 'Pastel Yellow','Pastel Red','Light Blue','Light Purple'];
  const colorsArray = ['#67ebca','#fffeab','#ffa1a1','#a1deff', '#d5a1ff'];
  let nextIndex = index;
  if (index < colorNames.length - 1) {
    nextIndex = index + 1;
  } else {
    nextIndex = 0;
  }
  
  return (
    <>
      <div className = "container" //the flexbox
      style={{ backgroundColor: colorsArray[index]}}>
        {
          <div className = "item">
            {/* the current color name printed out */}
            <p>{colorNames[index] + "!"}</p> 
            <h3>The next color is: {colorNames[nextIndex]} </h3>
          <button onClick={() => setIndex((index) => {
            if (index < colorsArray.length - 1) {
              console.log("index is " + index + 1);
              return index + 1;
            } 
            console.log("index is 0");
            return 0;
          })} >
            Click Me to Change the Background Color!
            </button>
          </div>
        }
      </div>
    </>
  )
}

export default App
