import { useState } from "react"
import { Navbar } from "../components/navbar"

export default function Home() {
  const  [counter, setCounter]= useState(0)
  return (
    <div>
          <Navbar/>
          <div>{counter}</div>
          <button onClick={()=>{setCounter(counter+1)
          }}
          >Add</button>
    </div>
  )
}
