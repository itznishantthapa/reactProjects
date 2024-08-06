import React, { useState } from 'react'
import Products from './Products'

function App() {
  var [a,updater]=useState(1);
  let handlingA=()=>{
    updater(a+1)
  }
  return (
    <>
    <div className='w-full h-screen bg-zinc-900 p-4'>
      <div className='w-44 h-32 rounded-xl bg-red-600 text-white'>
        <h3>Hello World</h3>
      </div>
      <Products data={{info:"this is product data" , title:"products"}} />
      <button onClick={handlingA} className='px-3 py-1 bg-green-500 rounded-md'>Click to count {a}</button>
    </div>
    </>
  )
}

export default App