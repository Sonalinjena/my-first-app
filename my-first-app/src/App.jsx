import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const  name="sonalin";
  const fruits=["apple","banana","grapes"]
  return (<>
    <h1>Hello {name}</h1>
    <ul>
      {fruits.map((i)=>(
        <li>{i}</li>
      ))}
    </ul>

  </>
  
  );
}



export default App
