
import { Suspense } from 'react'
import './App.css'
import Bottles from './components/Bottles/Bottles'

const battlesPromise = fetch('bottles.json').then (res => res.json());

function App() {
  

  return (
    <>
      
      <h1>Buy Awsome Water Bottle</h1>
      <Suspense faleback= {<h3>Bottles are loading</h3>}>
        <Bottles battlesPromise = {battlesPromise} ></Bottles>
      </Suspense>
      
    </>
  )
}

export default App
