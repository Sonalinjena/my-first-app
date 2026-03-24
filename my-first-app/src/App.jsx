import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'

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
     <h1>React Features</h1>

    <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        flexWrap: "wrap"
      }}>
        <Card 
          title="Fast Rendering" 
          description="React uses Virtual DOM to update UI efficiently."
        />

        <Card 
          title="Reusable Components" 
          description="Write once and reuse components anywhere."
        />

        <Card 
          title="Strong Community" 
          description="React has a huge ecosystem and support."
        />
      </div>

  </>
  
  );
}



export default App
